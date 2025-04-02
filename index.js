function updateWeather(response) {
  let temperatureData = response.data.temperature.current;
  let currentTemperature = document.querySelector("#current-temperature");
  //console.log(response.data);
  currentTemperature.innerHTML = Math.round(temperatureData);

  let currentCity = document.querySelector("#current-city");
  let cityName = response.data.city;
  currentCity.innerHTML = cityName;
}

function searchCity(city) {
  //let apiKey = "eb79bof31898546ffea432d4bb90t390";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=eb79bof31898546ffea432d4bb90t390&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function citySearchBar(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  searchCity(searchBar.value);
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput = addEventListener("submit", citySearchBar);
