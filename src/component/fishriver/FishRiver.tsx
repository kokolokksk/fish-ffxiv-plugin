import React, { useEffect, useState } from "react";
import './fishriver.css';
import getWeatherAreaData from "./WeatherAreaData";

const FishRiver = () => {
  const [animationDuration, setAnimationDuration] = useState<number>(5); // 初始化动画持续时间为5秒
  const [initialPosition, setInitialPosition] = useState<number>(4.7); // 初始化位置为0% 
  const fishes = ["招雨王", "招雨王","招雨王",];
  const times = ["0", "1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"] 
  useEffect(() => {
    const newDuration = 0;
    setAnimationDuration(newDuration);
    const timer = setInterval(() => {
      const newInitialPosition = calculateNewPosition();
      console.info(newInitialPosition);
      setInitialPosition(newInitialPosition); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (i: number) => {
    console.info(i);
  };

  // const calculateNewDuration = (): number => {
  //   const timeLength = 70*3600;
    
  //   return timeLength / 24;
  // };
  const calculateNewPosition = (): number => {
    const hm = getEorzeaTime();
    console.info(hm);
    const initialPosition = Number(hm[0])*4+Number(hm[1])/15;
    return initialPosition+4;
  }


  return (
    <>
      <div className="fishtable">
        <div className="time-tick"></div> {/* 时间刻度元素 */}
        {fishes.map((item, index) => (
          <div className="board-row" key={index}>
            <Square value={item} onSquareClick={() => handleClick(0)} weather={item} />
            {times.map((itemx, indexx) => (
              <Square value={itemx} onSquareClick={() => handleClick(indexx)} weather={getEzHoursWeather(itemx)} />
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

function Square({ value, onSquareClick, weather }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {weather}
    </button>
  );
}

function getEzHoursWeather(ezHours:string){ 
  console.info(ezHours);
  const E_TIME = 20.5714285714; // ET相对于LT的倍数 
  const NOW_TIME = new Date().getTime(); // 取当前时间戳
  const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
  const eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
   
  eorzeaTime.setHours(Number(ezHours));
  eorzeaTime.setMinutes(0);
  eorzeaTime.setSeconds(0);
  // 反向计算真实时间 
  const LT_TIME = eorzeaTime.getTime() / E_TIME; // 艾欧泽亚时间转换为本地时间
  console.info(LT_TIME);
  const realTime = new Date(LT_TIME); // 真实时间对象
  realTime.setHours(realTime.getHours() + 16); // 时区转换
  if(realTime.getHours()>=8){
    realTime.setDate(realTime.getDate()+1);
  }
  console.info(eorzeaTime);

  console.info(realTime);

  const p = getTargetValue(realTime.getTime());
      const weather = getAreaPrecent();
       const  w:WeatherEntry[] =  weather['Central Shroud'];
       let weatherName = getRealWeather(w,p);
      weatherName = getChineseWeather(weatherName);
        
      return weatherName;
}
function getChineseWeather(weatherName:string){
  if(weatherName === 'Fair Skies'){
    weatherName = '晴朗';
  }
  if(weatherName === 'Clear Skies'){
    weatherName = '碧空';
  }
  if(weatherName === 'Clouds'){
    weatherName = '多云';
  }
  if(weatherName === 'Fog'){
    weatherName = '薄雾';
  }
  if(weatherName === 'Wind'){
    weatherName = '微风';
  }
  if(weatherName === 'Gales'){
    weatherName = '强风';
  }
  if(weatherName === 'Rain'){
    weatherName = '小雨';
  }
  if(weatherName === 'Showers'){
    weatherName = '暴雨';
  }
  if(weatherName === 'Thunder'){
    weatherName = '打雷';
  }
  if(weatherName === 'Thunderstorms'){
    weatherName = '雷雨';
  }
  if(weatherName === 'Dust Storms'){
    weatherName = '沙尘暴';
  }
  if(weatherName === 'Heat Waves'){
    weatherName = '热浪';
  }
  if(weatherName === 'Snow'){
    weatherName = '小雪';
  }
  if(weatherName === 'Blizzards'){
    weatherName = '暴雪';
  }
  if(weatherName === 'Gloom'){
    weatherName = '阴云';
  }
  if(weatherName === 'null'){
    weatherName = '灵风';
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
