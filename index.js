function citySearchBar(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchBar.value;
}

let searchFormInput = document.querySelector("#search-form");
searchFormInput = addEventListener("submit", citySearchBar);
