import React, { useEffect, useState } from "react";
import './fishriver.css';
import getWeatherAreaData from "./WeatherAreaData";
import { getChineseWeather } from "../utils";
import {getData} from "../../data/patch/fish";
import {place} from "../../data/locale/placeNames";
import {itemName} from "../../data/locale/item";
import * as  fishKnowledge  from "../../data/patch/fishKnowledge";

const FishRiver = () => {
  const [animationDuration, setAnimationDuration] = useState<number>(5); // 初始化动画持续时间为5秒
  const [initialPosition, setInitialPosition] = useState<number>(4.7); // 初始化位置为0% 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFish, setFilteredFish] = useState([]);
  const [plannedFish, setPlannedFish] = useState(Object); // [
  let fishes = Object;
  fishes = getData();
  const firstTenFish = Object.values(fishes).slice(0, 1);
  // console.info(fishes);
  const times = ["0", "1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"] 
  useEffect(() => {
    
    setPlannedFish(firstTenFish)
    const newDuration = 0;
    setAnimationDuration(newDuration);
    const timer = setInterval(() => {
      const newInitialPosition = calculateNewPosition();
      // console.info(newInitialPosition);
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
    const filtered = Object.entries(fishes).filter(([key, fish]) =>
      getChineseFishName(fish).toLowerCase().includes(term.toLowerCase())
    );
    if(filtered.length>5){
      const temp = filtered.slice(0, 5);
      setFilteredFish(temp);
    }else{
      setFilteredFish(filtered);
    }
    
  };

  const handleClick = (i: number) => {
    //console.info(i);
  };
  const displayFishInfo = (fish: any) => {
      console.info(fish);
      console.info(getChineseFishName(fish));
      console.info(fish.locations);
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
    setPlannedFish(temp);
  }

  return (
    <>
    <div>
      <div>
          <input
              type="text"
              placeholder="Search fish..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
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
              <Square value={getChineseFishName(fish)} onSquareClick={() => displayFishInfo(fish)} weather={getChineseFishName(fish)} fish={null} />
              {times.map((itemx, indexx) => (
                <Square value={itemx} onSquareClick={() => handleClick(indexx)} weather={getEzHoursWeather(itemx, fish.locations)} fish={fish}  />
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

function Square({ value, onSquareClick, weather, fish }) {
  const [timeOn, setTimeOn] = useState(false);
  //console.info(value)
 
  useEffect(() => {
    if(fish){
      const start = fishKnowledge.default[fish._id]['startHour'];
      const end = fishKnowledge.default[fish._id]['endHour'];
      if(start<=value && value <end){
        setTimeOn(true);
        console.info(`${value} in [${start},${end})`)
      } 
    }
   
  }, []);
  return (
    <button className={`square ${timeOn ? 'onTime' : 'notOnTime'}`} onClick={onSquareClick} >
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
function getEzHoursWeather(ezHours:string, locations:number[]){ 
  // console.info(ezHours);
  // console.info(locations);
  const E_TIME = 20.5714285714; // ET相对于LT的倍数 
  const NOW_TIME = new Date().getTime(); // 取当前时间戳
  const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
  let eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
   
  eorzeaTime.setHours(Number(ezHours));
  eorzeaTime.setMinutes(0);
  eorzeaTime.setSeconds(0);
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
    if(v in place){
      pl = place[v]
      // console.info(pl)
      break
    }
  }
  let weatherName = "未知";
  if(pl.name_en!==''){
    const p = getTargetValue(realTime.getTime());
    const weather = getAreaPrecent();
    const  w:WeatherEntry[] =  weather[pl.name_en];
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
