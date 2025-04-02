function updateWeather(response) {
  let temperatureData = response.data.temperature.current;
  let currentTemperature = document.querySelector("#current-temperature");
  //console.log(response.data);
  currentTemperature.innerHTML = Math.round(temperatureData);
}

function searchCity(city) {
  //let apiKey = "eb79bof31898546ffea432d4bb90t390";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=eb79bof31898546ffea432d4bb90t390&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function citySearchBar(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchBar.value;
  searchCity(searchBar.value);
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput = addEventListener("submit", citySearchBar);
