let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = days[now.getDay()];
console.log(today);

let hour = now.getHours();
console.log(hour);

let minutes = now.getMinutes();
console.log(minutes);

let h2 = document.querySelector("h2");
h2.innerHTML = `${today} ${hour}:${minutes}`;

function searchWeather(event) {
  event.preventDefault();
  let weatherinput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  let h3 = document.querySelector("h3");
  h1.innerHTML = `The Current Weather in ${weatherinput.value}`;
  h3.innerHTML = `Upcoming in ${weatherinput.value}`;
}

let submit = document.querySelector("#city-form");
submit.addEventListener("submit", searchWeather);

function clickC(event) {
  event.preventDefault();
  let currentCel = document.querySelector("#currentTemp");
  currentCel.innerHTML = "27°C 🌤";
}

function clickF(event) {
  event.preventDefault();
  let currentFar = document.querySelector("#currentTemp");
  currentFar.innerHTML = "80°F 🌤";
}

let celElement = document.querySelector("#currentCel");
let farElement = document.querySelector("#currentFar");
celElement.addEventListener("click", clickC);
farElement.addEventListener("click", clickF);
