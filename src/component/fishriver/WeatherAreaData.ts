function getWeatherAreaData(){

  
    
    
    const originalData : OriginalData= {
        'Limsa Lominsa': ['Clouds', 20, 'Clear Skies', 50, 'Fair Skies', 80, 'Fog', 90, 'Rain'],
        'Middle La Noscea': ['Clouds', 20, 'Clear Skies', 50, 'Fair Skies', 70, 'Wind', 80, 'Fog', 90, 'Rain'],
        'Lower La Noscea': ['Clouds', 20, 'Clear Skies', 50, 'Fair Skies', 70, 'Wind', 80, 'Fog', 90, 'Rain'],
        'Eastern La Noscea': ['Fog', 5, 'Clear Skies', 50, 'Fair Skies', 80, 'Clouds', 90, 'Rain', 95, 'Showers'],
        'Western La Noscea': ['Fog', 10, 'Clear Skies', 40, 'Fair Skies', 60, 'Clouds', 80, 'Wind', 90, 'Gales'],
        'Upper La Noscea': ['Clear Skies', 30, 'Fair Skies', 50, 'Clouds', 70, 'Fog', 80, 'Thunder', 90, 'Thunderstorms'],
        'Outer La Noscea': ['Clear Skies', 30, 'Fair Skies', 50, 'Clouds', 70, 'Fog', 85, 'Rain'],
        'The Mist': ['Clouds', 20, 'Clear Skies', 50, 'Fair Skies', 70, 'Fair Skies', 80, 'Fog', 90, 'Rain'],
        'Gridania': ['Rain', 5, 'Rain', 20, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 55, 'Clear Skies', 85, 'Fair Skies'],
        'Central Shroud': ['Thunder', 5, 'Rain', 20, 'Fog', 30, 'Clouds', 40, 'Fair Skies', 55, 'Clear Skies', 85, 'Fair Skies'],
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
      const formattedData: Record<string, WeatherEntry[]> = {};

      for (const [city, weatherData] of Object.entries(originalData)) {
          const formattedWeatherData: WeatherEntry[] = [];
          
          for (let i = 0; i < weatherData.length; i += 2) {
              const weatherEntry: WeatherEntry = { weather: weatherData[i] as string, percent: weatherData[i + 1] as number };
              formattedWeatherData.push(weatherEntry);
          }
          
          formattedData[city] = formattedWeatherData;
}
    return formattedData;
}
interface WeatherEntry {
    weather: string;
    percent: number;
}
type OriginalData = Record<string, Array<string | number>>;
export default getWeatherAreaData;