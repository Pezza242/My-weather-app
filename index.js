function updateWeather(response) {
  let temperatureData = response.data.temperature.current;
  let currentTemperature = document.querySelector("#current-temperature");
  console.log(response.data);
  currentTemperature.innerHTML = Math.round(temperatureData);

  let currentCity = document.querySelector("#current-city");
  let cityName = response.data.city;
  currentCity.innerHTML = cityName;

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;

  let description = document.querySelector("#weather-description");
  let weatherDescription = response.data.condition.description;
  description.innerHTML = weatherDescription;

  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeTemperature = response.data.temperature.feels_like;
  feelsLike.innerHTML = `Feels like: ${Math.round(feelsLikeTemperature)}º`;

  let humidity = document.querySelector("#humidity");
  let humidityLevels = response.data.temperature.humidity;
  humidity.innerHTML = `${humidityLevels}%`;

  let wind = document.querySelector("#wind");
  let windSpeed = response.data.wind.speed;
  wind.innerHTML = `${windSpeed}km/h`;

  let date = new Date(response.data.time * 1000);
  let dateTime = document.querySelector("#date-and-time");
  dateTime.innerHTML = formatDate(date);
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];
  let dayMonth = date.getDate();

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (dayMonth === 1 || dayMonth === 21 || dayMonth === 31) {
    return `${day} ${dayMonth}st ${month} ${hours}:${minutes}`;
  }
  if (dayMonth === 2 || dayMonth === 22) {
    return `${day} ${dayMonth}nd ${month} ${hours}:${minutes}`;
  }
  if (dayMonth === 3 || dayMonth === 23) {
    return `${day} ${dayMonth}rd ${month} ${hours}:${minutes}`;
  } else {
    return `${day} ${dayMonth}th ${month} ${hours}:${minutes}`;
  }

  //console.log(dayMonth);
  //return `${day} ${dayMonth} <br/> ${month} ${hours}:${minutes}`;
}
function searchCity(city) {
  //let apiKey = "eb79bof31898546ffea432d4bb90t390";
  //Had to insert api key into the url instead because making a string for it kept showing 'Invalid api key'
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

searchCity("Birmingham");
