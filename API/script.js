let see_tomorrow = ""
const citiesInPakistan = [
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Rawalpindi", latitude: 33.6844, longitude: 73.0479 },
  { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
  { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
  { name: "Faisalabad", latitude: 31.5204, longitude: 73.6869 },
  { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
  { name: "Sialkot", latitude: 32.0836, longitude: 74.549 },
  { name: "Hyderabad", latitude: 25.396, longitude: 68.3578 },
  { name: "Gujranwala", latitude: 32.085, longitude: 74.1883 },
  { name: "Sukkur", latitude: 27.7101, longitude: 68.8597 },
  { name: "Murree", latitude: 33.9072, longitude: 73.4104 },
  { name: "Mardan", latitude: 34.1951, longitude: 72.0593 },
  { name: "Gujrat", latitude: 32.0784, longitude: 74.0748 },
  { name: "Bahawalpur", latitude: 29.396, longitude: 71.672 },
  { name: "Chakwal", latitude: 32.0753, longitude: 72.8558 },
  { name: "Swat", latitude: 35.2221, longitude: 72.697 },
];
const select = document.querySelector("#select");
let html = "";
citiesInPakistan.forEach((cities) => {
  html += ` <option value="${cities.name}">${cities.name}</option>`;
});
select.innerHTML = html;
const alloptions = document.querySelectorAll("#select option");
let div = document.querySelector("#details");
async function fetchFromApi(cityname, longitude, latitude) {
  console.log(cityname, longitude, latitude);
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const data = await response.json();
    if (!response.ok) {
      console.log(error);
    }
    console.log(
      data.current_weather.temperature,
      data.current_weather.windspeed,
      data.current_weather.is_day
    );
    div.innerHTML = `
      <h1>Temperature: ${data.current_weather.temperature}°C</h1>
        <h3>Wind Speed: ${data.current_weather.windspeed} km/h</h3>
        <h3>${data.current_weather.is_day ? "Daytime" : "Night-time"}</h3>`;
  } catch (error) {
    console.log("error", error);
  }
}
function check() {
  alloptions.forEach((element) => {
    if (element.selected === true) {
      citiesInPakistan.forEach((citiesData) => {
        if (citiesData.name === element.value) {
          fetchFromApi(
            citiesData.name,
            citiesData.longitude,
            citiesData.latitude
          );
        }
      });
    }
  });
}
