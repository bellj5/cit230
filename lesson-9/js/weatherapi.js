let request = new XMLHttpRequest();
let key = 'a03b5599f343b6278635a5034e29a0e2';
let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=4483478&APPID=' + key;

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
  let weather = request.response;
  let temp = weather.list[0].main.temp;
  document.getElementById('current-temp').innerHTML = kelvinToFahrenheit(temp);
}

function kelvinToFahrenheit(temp) {
  return Math.round(9 / 5 * (temp - 273) + 32);
}
