import React, { useEffect, useState } from "react";
import './fishriver.css';

const FishRiver = () => {
  const [animationDuration, setAnimationDuration] = useState<number>(5); // 初始化动画持续时间为5秒
  const [initialPosition, setInitialPosition] = useState<number>(4.7); // 初始化位置为0%
  const [weather, setWeather] = useState(String);
  const fishes = ["招雨王", "招雨王", "招雨王"];
  const times = ["0", "1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"] 
  useEffect(() => {
    const newDuration = 0;
    setAnimationDuration(newDuration);
    const timer = setInterval(() => {
      const newInitialPosition = calculateNewPosition();
      console.info(newInitialPosition);
      setInitialPosition(newInitialPosition);
      setWeather(getWeather())
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
            <Square value={item} onSquareClick={() => handleClick(0)} />
            {times.map((item, index) => (
              <Square value={item} onSquareClick={() => handleClick(index)} />
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

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
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
     
  function getWeather(){
      const p = getTargetValue(new Date().getTime());
      return "晴朗";
  }
  function getAreaPrecent(){
    // https://github.com/Asvel/ffxiv-weather/blob/master/src/Weather.ts
    const data = {
      'Limsa Lominsa': [
        {'weather':'Clouds','precent':20,},
        {'weather':'Clear Skies', 'precent':50},
        {'weather':'Fair Skies', 'precent':80}, 
        {'weather':'Fog', 'precent':90}, 
        {'weather':'Rain','precent':100}],
      'Middle La Noscea': [
        {'weather':'Clouds', 'precent':20},
        {'weather': 'Clear Skies', 'precent':50},
        {'weather':  'Fair Skies', 'precent':70}, 
        {'weather':  'Wind', 'precent':80}, 
        {'weather':  'Fog', 'precent':90}, 
        {'weather':  'Rain','precent':100}],
      'Lower La Noscea': [
        {'weather':'Clouds', 'precent':20}, 
        {'weather':'Clear Skies', 'precent':50}, 
        {'weather':'Fair Skies', 'precent':70}, 
        {'weather':'Wind', 'precent':80}, 
        {'weather':'Fog', 'precent':90}, 
        {'weather':'Rain','precent':100}],
      'Eastern La Noscea': [
        {'weather':'Fog', 'precent':5}, 
        {'weather':'Clear Skies', 'precent':50}, 
        {'weather':'Fair Skies', 'precent':80}, 
        {'weather':'Clouds', 'precent':90}, 
        {'weather':'Rain', 'precent':95}, 
        {'weather':'Showers','precent':100}],
      'Western La Noscea': [
        {'weather':'Fog', 'precent':10}, 
        {'weather':'Clear Skies', 'precent':40}, 
        {'weather':'Fair Skies', 'precent':60}, 
        {'weather':'Clouds', 'precent':80}, 
        {'weather':'Wind', 'precent':90}, 
        {'weather':'Gales','precent':100}],
      'Upper La Noscea': [
        'Clear Skies', 30,
         'Fair Skies', 50,
          'Clouds', 70,
           'Fog', 80, 
           'Thunder', 90,
            'Thunderstorms'],
      'Outer La Noscea': [
        'Clear Skies', 30,
         'Fair Skies', 50,
          'Clouds', 70,
           'Fog', 85,
            'Rain'],
      'The Mist': [
        'Clouds', 20,
         'Clear Skies', 50,
          'Fair Skies', 70,
           'Fair Skies', 80,
            'Fog', 90,
             'Rain'],
      'Gridania': [
        'Rain', 5,
       'Rain', 20, 
       'Fog', 30, 
       'Clouds', 40, 
       'Fair Skies', 55, 
       'Clear Skies', 85, 
       'Fair Skies'],
      'Central Shroud': [
        'Thunder', 5, 
        'Rain', 20, 
        'Fog', 30, 
        'Clouds', 40, 
        'Fair Skies', 55, 
        'Clear Skies', 85, 
        'Fair Skies'],
      'East Shroud': ['Thunder', 5, 'Rain', 20, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 55, 'Clear Skies', 85, 'Fair Skies'],
      'South Shroud': ['Fog', 5, 'Thunderstorms', 10, 'Thunder', 25, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 70, 'Clear Skies'],
      'North Shroud': ['Fog', 5, 'Showers', 10, 'Rain', 25, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 70, 'Clear Skies'],
      'The Lavender Beds': ['Clouds', 5, 'Rain', 20, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 55, 'Clear Skies', 85, 'Fair Skies'],
      'Ul\'dah': ['Clear Skies', 40, 'Fair Skies', 60, 'Clouds', 85, 'Fog', 95, 'Rain'],
      'Western Thanalan': ['Clear Skies', 40, 'Fair Skies', 60, 'Clouds', 85, 'Fog', 95, 'Rain'],
      'Central Thanalan': ['Dust Storms', 15, 'Clear Skies', 55, 'Fair Skies', 75, 'Clouds', 85, 'Fog', 95, 'Rain'],
      'Eastern Thanalan': ['Clear Skies', 40, 'Fair Skies', 60, 'Clouds', 70, 'Fog', 80, 'Rain', 85, 'Showers'],
      'Southern Thanalan': ['Heat Waves', 20, 'Clear Skies', 60, 'Fair Skies', 80, 'Clouds', 90, 'Fog'],
      'Northern Thanalan': ['Clear Skies', 5, 'Fair Skies', 20, 'Clouds', 50, 'Fog'],
      'The Goblet': ['Clear Skies', 40, 'Fair Skies', 60, 'Clouds', 85, 'Fog', 95, 'Rain'],
      'Ishgard': ['Snow', 60, 'Fair Skies', 70, 'Clear Skies', 75, 'Clouds', 90, 'Fog'],
      'Coerthas Central Highlands': ['Blizzards', 20, 'Snow', 60, 'Fair Skies', 70, 'Clear Skies', 75, 'Clouds', 90, 'Fog'],
      'Coerthas Western Highlands': ['Blizzards', 20, 'Snow', 60, 'Fair Skies', 70, 'Clear Skies', 75, 'Clouds', 90, 'Fog'],
      'Empyreum': ['Snow', 5, 'Fair Skies', 25, 'Clear Skies', 65, 'Clouds', 80, 'Fog'],
      'The Sea of Clouds': ['Clear Skies', 30, 'Fair Skies', 60, 'Clouds', 70, 'Fog', 80, 'Wind', 90, 'Umbral Wind'],
      'Azys Lla': ['Fair Skies', 35, 'Clouds', 70, 'Thunder'],
      'The Diadem': ['Fair Skies', 30, 'Fog', 60, 'Wind', 90, 'Umbral Wind'],
      'Idyllshire': ['Clouds', 10, 'Fog', 20, 'Rain', 30, 'Showers', 40, 'Clear Skies', 70, 'Fair Skies'],
      'The Dravanian Forelands': ['Clouds', 10, 'Fog', 20, 'Thunder', 30, 'Dust Storms', 40, 'Clear Skies', 70, 'Fair Skies'],
      'The Dravanian Hinterlands': ['Clouds', 10, 'Fog', 20, 'Rain', 30, 'Showers', 40, 'Clear Skies', 70, 'Fair Skies'],
      'The Churning Mists': ['Clouds', 10, 'Gales', 20, 'Umbral Static', 40, 'Clear Skies', 70, 'Fair Skies'],
      'Mor Dhona': ['Clouds', 15, 'Fog', 30, 'Gloom', 60, 'Clear Skies', 75, 'Fair Skies'],
      'Rhalgr\'s Reach': ['Clear Skies', 15, 'Fair Skies', 60, 'Clouds', 80, 'Fog', 90, 'Thunder'],
      'The Fringes': ['Clear Skies', 15, 'Fair Skies', 60, 'Clouds', 80, 'Fog', 90, 'Thunder'],
      'The Peaks': ['Clear Skies', 10, 'Fair Skies', 60, 'Clouds', 75, 'Fog', 85, 'Wind', 95, 'Dust Storms'],
      'The Lochs': ['Clear Skies', 20, 'Fair Skies', 60, 'Clouds', 80, 'Fog', 90, 'Thunderstorms'],
      'Kugane': ['Rain', 10, 'Fog', 20, 'Clouds', 40, 'Fair Skies', 80, 'Clear Skies'],
      'Shirogane': ['Rain', 10, 'Fog', 20, 'Clouds', 40, 'Fair Skies', 80, 'Clear Skies'],
      'The Ruby Sea': ['Thunder', 10, 'Wind', 20, 'Clouds', 35, 'Fair Skies', 75, 'Clear Skies'],
      'Yanxia': ['Showers', 5, 'Rain', 15, 'Fog', 25, 'Clouds', 40, 'Fair Skies', 80, 'Clear Skies'],
      'The Azim Steppe': ['Gales', 5, 'Wind', 10, 'Rain', 17, 'Fog', 25, 'Clouds', 35, 'Fair Skies', 75, 'Clear Skies'],
      'Eureka Anemos': ['Fair Skies', 30, 'Gales', 60, 'Showers', 90, 'Snow'],
      'Eureka Pagos': ['Clear Skies', 10, 'Fog', 28, 'Heat Waves', 46, 'Snow', 64, 'Thunder', 82, 'Blizzards'],
      'Eureka Pyros': ['Fair Skies', 10, 'Heat Waves', 28, 'Thunder', 46, 'Blizzards', 64, 'Umbral Wind', 82, 'Snow'],
      'Eureka Hydatos': ['Fair Skies', 12, 'Showers', 34, 'Gloom', 56, 'Thunderstorms', 78, 'Snow'],
      'Bozjan Southern Front': ['Fair Skies', 52, 'Rain', 64, 'Wind', 76, 'Thunder', 88, 'Dust Storms'],
      'Zadnor': ['Fair Skies', 60, 'Rain', 70, 'Wind', 80, 'Thunder', 90, 'Snow'],
      'The Crystarium': ['Clear Skies', 20, 'Fair Skies', 60, 'Clouds', 75, 'Fog', 85, 'Rain', 95, 'Thunderstorms'],
      'Eulmore': ['Gales', 10, 'Rain', 20, 'Fog', 30, 'Clouds', 45, 'Fair Skies', 85, 'Clear Skies'],
      'Lakeland': ['Clear Skies', 20, 'Fair Skies', 60, 'Clouds', 75, 'Fog', 85, 'Rain', 95, 'Thunderstorms'],
      'Kholusia': ['Gales', 10, 'Rain', 20, 'Fog', 30, 'Clouds', 45, 'Fair Skies', 85, 'Clear Skies'],
      'Amh Araeng': ['Fair Skies', 45, 'Clouds', 60, 'Dust Storms', 70, 'Heat Waves', 80, 'Clear Skies'],
      'Il Mheg': ['Rain', 10, 'Fog', 20, 'Clouds', 35, 'Thunderstorms', 45, 'Clear Skies', 60, 'Fair Skies'],
      'The Rak\'tika Greatwood': ['Fog', 10, 'Rain', 20, 'Umbral Wind', 30, 'Clear Skies', 45, 'Fair Skies', 85, 'Clouds'],
      'The Tempest': ['Clouds', 20, 'Fair Skies', 80, 'Clear Skies'],
      'Old Sharlayan': ['Clear Skies', 10, 'Fair Skies', 50, 'Clouds', 70, 'Fog', 85, 'Snow'],
      'Radz-at-Han': ['Fog', 10, 'Rain', 25, 'Clear Skies', 40, 'Fair Skies', 80, 'Clouds'],
      'Labyrinthos': ['Clear Skies', 15, 'Fair Skies', 60, 'Clouds', 85, 'Rain'],
      'Thavnair': ['Fog', 10, 'Rain', 20, 'Showers', 25, 'Clear Skies', 40, 'Fair Skies', 80, 'Clouds'],
      'Garlemald': ['Snow', 45, 'Thunder', 50, 'Rain', 55, 'Fog', 60, 'Clouds', 85, 'Fair Skies', 95, 'Clear Skies'],
      'Mare Lamentorum': ['Umbral Wind', 15, 'Moon Dust', 30, 'Fair Skies'],
      'Elpis': ['Clouds', 25, 'Umbral Wind', 40, 'Fair Skies', 85, 'Clear Skies'],
      'Ultima Thule': ['Astromagnetic Storm', 15, 'Fair Skies', 85, 'Umbral Wind'],
      'Unnamed Island': ['Clear Skies', 25, 'Fair Skies', 70, 'Clouds', 80, 'Rain', 90, 'Fog', 95, 'Showers'],
    };
    return data;
  }
export default FishRiver;
