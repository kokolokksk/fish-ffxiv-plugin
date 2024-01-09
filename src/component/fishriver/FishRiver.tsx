import React, { useEffect, useState } from "react";
import './fishriver.css';
import getWeatherAreaData from "./WeatherAreaData";
import { getChineseWeather } from "../utils";
import {getData} from "../../data/patch/fish";
import {place} from "../../data/locale/placeNames";
import {itemName} from "../../data/locale/item";
import * as  fishKnowledge  from "../../data/patch/fishKnowledge";
import * as wetherAll from "../../data/locale/weather";
import * as ff14anglerData from "../../data/patch/fishDataFull";
import Input from '../input';
import { match } from 'pinyin-pro';
import * as  t1  from "../../data/tip1.js";
import * as  t2  from "../../data/tip2.js";
import * as  t4  from "../../data/tip4.js";
import * as  t6  from "../../data/tip6.js";
import * as  t7  from "../../data/tip7.js";
import { number } from "prop-types";

const FishRiver = () => {
  const [animationDuration, setAnimationDuration] = useState<number>(5); // 初始化动画持续时间为5秒
  const [initialPosition, setInitialPosition] = useState<number>(4.7); // 初始化位置为0% 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFish, setFilteredFish] = useState([]);
  const [plannedFish, setPlannedFish] = useState(Object); // [
  const [statusMsg,setStatusMsg] = useState('');
  const [timeChange, setTimeChange] = useState(Object);
  let fishes = Object;
  fishes = getData();


  const addCNLocation = (fishes) => {
    for(const f in fishes){
      const fish = fishes[f]; 
      const anglerFishId = fish.anglerFishId;
      for(const l in ff14anglerData.default){
        const location = ff14anglerData.default[l];
        if(l===anglerFishId+''){
          fish.locationsCN = location['locationsCN'];
          if(location['fishSpotCN']){
            fish.sportCN = location['fishSpotCN']; 
          }
        }
      }
    }
  };
  let fullFf14anglerData = [];
  const addAdditionalInfo = (ff14anglerData) => {
    ff14anglerData.default.forEach((fish) => {
      const anglerFishId = fish.id;
      for(const f in fishes){
        const fishx = fishes[f]; 
        const anglerFishIdx = fishx.anglerFishId;
          if(anglerFishIdx===anglerFishId){
            fish = {...fish,...fishx};
            fullFf14anglerData.push(fish);
          }
      }
    });
  }

  //addCNLocation(fishes);
  addAdditionalInfo(ff14anglerData);
  let firstTenFish = Object.values(fullFf14anglerData).slice(0, 1);
  // console.info(fishes);
  const times = ["0", "1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"] 
  const localFish = localStorage.getItem("plannedFish");
  if(localFish){
    firstTenFish = JSON.parse(localFish);
  }
  
  
  useEffect(() => {
    const anglelist = [];
    const fishGameDataCN = getData();
    for(const f in fishGameDataCN){
      anglelist.push(fishGameDataCN[f]['anglerFishId']+'');
    }
    // console.info(anglelist);
    // load from local data
    
    setPlannedFish(firstTenFish)
    const newDuration = 0;
    setAnimationDuration(newDuration);
    const timer = setInterval(() => {
      const newInitialPosition = calculateNewPosition();
      console.info(newInitialPosition);
      setTimeChange(new Date());
      setInitialPosition(newInitialPosition); 
      setInitialPosition(newInitialPosition); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Step 3: Update fish data based on search term
    if(term===''){
      setFilteredFish([]);
      return;
    }
     
    let filtered = Object.entries(fullFf14anglerData).filter(([key,fish]) =>{
      // return getChineseFishName(fish).toLowerCase().includes(term.toLowerCase())
      return match(fish.fishName.cn,term);
    });
    if(filtered.length==0){
      filtered = Object.entries(fullFf14anglerData).filter((fish) =>{
        // return getChineseFishName(fish).toLowerCase().includes(term.toLowerCase())
        //console.info(fish?.sportCN?.[0]);
        for (const l in fish?.sportCN){
          if(match(fish?.sportCN?.[l],term)){
            return match(fish?.sportCN?.[l],term);
          }
        }
        return null;
      });
    }
    if(filtered.length>5){
      const temp = [];
      const remaining = [];
      for (let i = 0; i < filtered.length; i++) {
        const currentWeatherSetLength = filtered[i][1].weatherSet.length;
        if (currentWeatherSetLength > 0) {
          temp.push(filtered[i]);
        } else {
          remaining.push(filtered[i]);
        }
        if (temp.length === 5) {
          break; // 不再继续迭代一旦达到5个元素
        }
      }
      const result = temp.length < 5 ? temp.concat(remaining.slice(0, 5 - temp.length)) : temp;
     setFilteredFish(result);
    }else{
      setFilteredFish(filtered);
    }
    
  };
  
  const handleClick = (i: string,l:string[]) => {
    //console.info(i);
    let msg = "";
    let weather = ""
    const hh = parseInt(i)<9?'0'+i:i+'';
    const time = '时间：'+hh+':00:00'
    msg = time;
    if(i==='0'){
      weather = getEzHoursWeather((parseInt(i)-8)+'',l);
      msg = msg + ";上一个周期的天气是："+weather;
    }
    if(i==='23'){
      weather = getEzHoursWeather((parseInt(i)+8)+'',l);
      msg = msg + ";下一个周期的天气是："+weather;
    }
   
    setStatusMsg(msg);
  };
  const removeFish = (pf,fish) => {
    const newPf=[];
    for(let i=0;i<pf.length;i++){
      if(pf[i]===fish){
        //
      }else{
        newPf.push(pf[i])
      }
    }
    localStorage.setItem("plannedFish",JSON.stringify(newPf));
    setPlannedFish(newPf);
  }
 
  const displayFishInfo = (fish: any) => {
    let msg = "";
    const fishTipsList = [t1,t2,t4,t6,t7];
    for(let i=0;i<fishTipsList.length;i++){
      if(i==0 || i == 1){
        // handle tip1
        if(fish._id in fishTipsList[i].default){
          if(fishTipsList[i].default['requirements']){
            msg = fishTipsList[i].default['requirements'];
          }else{
            msg = fishTipsList[i].default[fish._id]['trick'];
          }
          break;
        }
      }else{
        if(fish._id in fishTipsList[i].default['TIPS']){
          msg = fishTipsList[i].default['TIPS'][fish._id]['trick'];
          break;
        }
      }
    }
    
    //console.info(fish);
    //console.info(getChineseFishName(fish));
    //console.info(fish.locations);
    msg += getChineseFishName(fish);
    msg += "\n  位置：";
    for(const l in fish.fishSpotCN){
      msg += fish.fishSpotCN[l];
      msg += " ";
    }
    setStatusMsg(msg);
  };
  // const calculateNewDuration = (): number => {
  //   const timeLength = 70*3600;
    
  //   return timeLength / 24;
  // };
  const calculateNewPosition = (): number => {
    const hm = getEorzeaTime();
    // console.info(hm);
    const initialPosition = Number(hm[0])*4+Number(hm[1])/15;
    return initialPosition+4;
  }

  const addFish = (fish: any) => {
    // console.info(fish);
    const temp = plannedFish;
    temp.push(fish);
    localStorage.setItem("plannedFish",JSON.stringify(temp));
    setPlannedFish(temp);
    setSearchTerm("")
    setFilteredFish([])
  }

  return (
    <>
    <div>
      <div>
      <div className="statusMsg" dangerouslySetInnerHTML={{__html:statusMsg}}></div>
        <div className="searchTab">
          <Input
              type="text"
              placeholder="使用首字母搜索鱼名"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            
        </div>
            <div className="searchedArea">
              {filteredFish.map(([key, fish]) => (
                <div className="searchedFish" key={key} onClick={() => addFish(fish)}>
                  <div className="fishName">{getChineseFishName(fish)}</div>
                  </div>
                  ))}
            </div>
              
        </div>
     </div>
      <div className="fishtable">
        <div className="time-tick"></div> {/* 时间刻度元素 */}
        {/* {fishes.map((item, index) => (
          <div className="board-row" key={index}>
            <Square value={item} onSquareClick={() => handleClick(0)} weather={item} />
            {times.map((itemx, indexx) => (
              <Square value={itemx} onSquareClick={() => handleClick(indexx)} weather={getEzHoursWeather(itemx)} />
            ))}
          </div>
        ))} */}
         
          {Object.entries(plannedFish).map(([key, fish]) => (
            <div className="board-row balance" key={key}>
              <Square timeChange={timeChange} value={getChineseFishName(fish)} onSquareDoubleClick={() => removeFish(plannedFish,fish)} onSquareClick={() => displayFishInfo(fish)} weather={getChineseFishName(fish)} fish={null} />
              {times.map((itemx, indexx) => (
                <Square timeChange={timeChange} key={key+'_'+indexx} value={itemx} onSquareClick={() => handleClick(itemx,fish.locationsCN)} weather={getEzHoursWeather(itemx, fish.locationsCN)} fish={fish} preWeather={getPreWeather(itemx,fish.locationsCN)} />
              ))}
            </div>
          ))}
               
        <div
          className="long-line"
          style={{left: `${initialPosition}%`, animation: `moveRight ${animationDuration}s linear infinite` }}
        ></div>
      </div>
    </>
  );
};

function Square({ value, onSquareDoubleClick, onSquareClick, weather, fish, preWeather, timeChange }) {
  const [timeOn, setTimeOn] = useState(false);
  const [fishable, setFishable] = useState(false);
  let rightPreWeather = false;
  let rightWeather = false;
  //console.info(value)
 
  useEffect(() => {
    if(fish){
      const start = fishKnowledge.default[fish._id]['startHour'];
      const end = fishKnowledge.default[fish._id]['endHour'];
      const fishPrevWeathers = fishKnowledge.default[fish._id]['prevWeathers'];
      const fishWeatherNum = fishKnowledge.default[fish._id]['weathers'];
      const fishWeather = [];
      if(fishPrevWeathers.length ==0 || fishPrevWeathers.includes(preWeather)){
        rightPreWeather = true;
      }
      for(const w in fishWeatherNum){
        fishWeather.push(wetherAll.default[fishWeatherNum[w]]['name_chs']);
      }
      if(fishWeather.length == 0 || fishWeather.includes(weather)){
        rightWeather = true;
      }
      if(end < start){
        if(start<=value && value <24 || 0<=value && value <end){
          setTimeOn(true)
          if(rightPreWeather && rightWeather){
            setFishable(true)
          }else{
            setFishable(false)
          }
        }else{
          setTimeOn(false)
          setFishable(false)
        } 
      }else{
        if(start<=value && value <end){
          setTimeOn(true);
          if(rightPreWeather && rightWeather){
            setFishable(true)
          }else{
            setFishable(false)
          }
         // console.info(`${value} in [${start},${end})`)
        }else{
          setTimeOn(false)
          setFishable(false)
        }
      }
      
    }
   
  }, [fish,timeChange]);
  return (
    <button className={`square ${timeOn ? 'onTime' : 'notOnTime'} ${fishable ? 'onFishTime' :''}`} onClick={onSquareClick} onDoubleClick={onSquareDoubleClick} >
      {weather}
    </button>
  );
}
// {
//  name_chs: '拉诺西亚',
//  name_en: 'La Noscea',
//  name_ja: 'ラノシア',
// }
type Place = {
  name_chs: string;
  name_en: string;
  name_ja: string;
} 

function getChineseFishName(fish){
  let name = "未知";
  if(fish._id in itemName){
    // console.info(itemName[fish._id]);
    name = itemName[fish._id]['chs'];
  }
  return name;
}
function getEzHoursWeather(ezHours:string, locations:string[]){ 
  // console.info(ezHours);
  // console.info(locations);
  const E_TIME = 20.5714285714; // ET相对于LT的倍数 
  const druationEzHoursAtLt:number = 60*60/E_TIME; // 1个艾欧泽亚小时在现实中的秒数
  const NOW_TIME = new Date().getTime(); // 取当前时间戳
  const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
  let eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
   
  eorzeaTime.setHours(Number(ezHours));
  eorzeaTime.setMinutes(0);
  eorzeaTime.setSeconds(0);
  // fixed https://gist.github.com/zyzsdy/ecf41a4cc04e2f95839a72291a207347#file-ffxiv-weather-js-L456
  //eorzeaTime = new Date(eorzeaTime.getTime() + (8 * 3600000));
  // 反向计算真实时间 
  const LT_TIME = new Date(eorzeaTime.getTime() / E_TIME); // 艾欧泽亚时间转换为本地时间
  const addSeconds = druationEzHoursAtLt*8;
  LT_TIME.setSeconds(LT_TIME.getSeconds()+addSeconds);
  // console.info(LT_TIME);
  const realTime = LT_TIME; // 真实时间对象
  realTime.setHours(realTime.getHours()); // 时区转换
  // console.info(eorzeaTime);

  // console.info(realTime);
 
  let pl:Place = {
    name_chs: '',
    name_en: '',
    name_ja: '',
  };
  for(const l in locations){
    // console.info(place)
    const v = locations[l];
    for (const p in place){
      if(place[p].name_chs===v){
        pl = place[p]
        // console.info(pl)
        break
      }  
    }
  }
  let weatherName = "未知";
  if(pl.name_chs!==''){
    const p = getTargetValue(realTime.getTime());
    const weather = getAreaPrecent();
    const  w:WeatherEntry[] =  weather[pl.name_chs];
    if(w){
      weatherName = getRealWeather(w,p);
      weatherName = getChineseWeather(weatherName);
    }
  }
  return weatherName;
}
function getPreWeather(ezHours:string, locations:string[]){ 
  // console.info(ezHours);
  // console.info(locations);
  const E_TIME = 20.5714285714; // ET相对于LT的倍数 
  const NOW_TIME = new Date().getTime(); // 取当前时间戳
  const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
  let eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
   
  eorzeaTime.setHours(Number(ezHours));
  eorzeaTime.setMinutes(0);
  eorzeaTime.setSeconds(0);

  eorzeaTime.setHours(eorzeaTime.getHours()-8);
  // fixed https://gist.github.com/zyzsdy/ecf41a4cc04e2f95839a72291a207347#file-ffxiv-weather-js-L456
  eorzeaTime = new Date(eorzeaTime.getTime() + (8 * 3600000));
  // 反向计算真实时间 
  const LT_TIME = eorzeaTime.getTime() / E_TIME; // 艾欧泽亚时间转换为本地时间
  // console.info(LT_TIME);
  const realTime = new Date(LT_TIME); // 真实时间对象
  realTime.setHours(realTime.getHours()); // 时区转换
  // console.info(eorzeaTime);

  // console.info(realTime);
 
  let pl:Place = {
    name_chs: '',
    name_en: '',
    name_ja: '',
  };
  for(const l in locations){
    // console.info(place)
    const v = locations[l];
    for (const p in place){
      if(place[p].name_chs===v && place[p].name_chs!==''){
        pl = place[p]
        //console.info(pl)
        break
      }  
    }
  }
  let weatherName = "未知";
  //console.info(pl)
  if(pl.name_chs!==''){
    const p = getTargetValue(realTime.getTime());
    const weather = getAreaPrecent();
    const  w:WeatherEntry[] =  weather[pl.name_chs];
    if(w){
      weatherName = getRealWeather(w,p);
      weatherName = getChineseWeather(weatherName);
    }
  }
  return weatherName;
}
 
function getEorzeaTime() {
  const E_TIME = 20.5714285714; // ET相对于LT的倍数
  const NOW_TIME = new Date().getTime(); // 取当前时间戳
  const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
  const eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
  const hh = eorzeaTime.getUTCHours(); // 时
  const mm = eorzeaTime.getUTCMinutes(); // 分
  // 时间格式化
  
  const hm = [hh,mm];
  return hm;
  }
  
  
    //  https://g.nga.cn/read.php?&tid=37329623
    function getTargetValue(timeMillis:number) {
      const unixSeconds =  timeMillis / 1000 ;
      const bell = unixSeconds / 175;
      const increment = (bell + 8 - (bell % 8)) % 24;
      let totalDays = unixSeconds / 4200;
      totalDays = (totalDays << 32) >>> 0;
      const calcBase = totalDays * 100 + increment;
      const step1 = ((calcBase << 11) ^ calcBase) >>> 0;
      const step2 = ((step1 >>> 8) ^ step1) >>> 0;
      return step2 % 100;
      }
      interface WeatherEntry {
        weather: string;
        percent: number;
    }
  function getWeather(){
      const p = getTargetValue(new Date().getTime());
      const weather = getAreaPrecent();
       const  w:WeatherEntry[] =  weather['Central Shroud'];
      return getRealWeather(w,p);
  }
  function getRealWeather(w:WeatherEntry[],p:number){
    // 24 ez hours = 70 real minutes
    //if now is ez 10:00 and real time is 21:00:01, then ez:00:00 and ez 23:59:59 's real time is what?
    // 10:00 - 21:00:01 = -11:00:01
    // 00:00 - 23:59:59 = -23:59:59
    // 70 real minutes = 24 ez hours
    // 1 real minute = 24/70 ez hours

    
    let i = 0;
    for(;i<w.length;i++){
      if(p<w[i].percent){
        return w[i].weather;
      }
    }
    return w[i-1].weather;
  }
  function getAreaPrecent(){
    
    return getWeatherAreaData();
  }
export default FishRiver;