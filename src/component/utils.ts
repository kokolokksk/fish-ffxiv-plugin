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
export {getChineseWeather};