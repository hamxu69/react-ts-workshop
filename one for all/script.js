const data = {
  daily: {
    time: [
      "2026-07-08",
      "2026-07-09",
      "2026-07-10",
      "2026-07-11",
      "2026-07-12",
      "2026-07-13",
      "2026-07-14",
    ],
    weather_code: [95, 51, 53, 51, 80, 51, 51],
    temperature_2m_max: [37.5, 38.8, 39.8, 38.9, 38.8, 37.4, 37.1],
    temperature_2m_min: [27.3, 29.3, 25.9, 26.6, 26.4, 26.2, 26.2],
  },
};

data.daily.time.forEach((el, index) => {
  console.log(
    data.daily.temperature_2m_min[index],
    data.daily.temperature_2m_max[index],
    getWeatherIcon(),
    
  );
});
function getWeatherIcon(weatherCode) {
  if (weatherCode === 0) {
    return "images/icon-sunny.webp";
  }
  if (weatherCode === 1 || weatherCode === 2) {
    return "images/icon-partly-cloudy.webp";
  }
  if (weatherCode === 3) {
    return "images/icon-overcast.webp";
  }
  if (weatherCode === 45 || weatherCode === 48) {
    return "images/icon-fog.webp";
  }
  if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return "images/icon-drizzle.webp";
  }
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return "images/icon-rain.webp";
  }
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return "images/icon-snow.webp";
  }
  if ([95, 96, 99].includes(weatherCode)) {
    return "images/icon-storm.webp";
  }
  return "images/icon-search.svg";
}