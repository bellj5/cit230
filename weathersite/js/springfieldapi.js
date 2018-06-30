let springfieldRequest = new XMLHttpRequest();
let springfieldKey = 'a03b5599f343b6278635a5034e29a0e2';
let springfieldRequestUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=4409896&APPID=' + springfieldKey;

springfieldRequest.open('GET', springfieldRequestUrl);
springfieldRequest.responseType = 'json';
springfieldRequest.send();

springfieldRequest.onload = function() {
  let weatherData = springfieldRequest.response;
  let springfieldData = weatherData.list[0].main;
  let mainContainer = document.getElementById('springfield-container');

  let imgData = weatherData.list[0].weather[0].icon;
  let img = document.createElement('img');
  img.src = 'https://openweathermap.org/img/w/' + imgData + '.png';
  img.alt = 'weather icon';
  img.style.width = '40px';
  document.getElementById('icon').appendChild(img);

  let kelvinToFahrenheit = (temp) => {
    return Math.round(9 / 5 * (temp - 273) + 32);
  }

  let humidity = document.createElement('p');
  let temperature = document.createElement('p');
  let tempHigh = document.createElement('p');
  let tempLow = document.createElement('p');
  let seaLevel = document.createElement('p');

  humidity.textContent = 'Humidity: ' + springfieldData.humidity + '%';
  mainContainer.appendChild(humidity);

  temperature.textContent = 'Current Temperature: ' + kelvinToFahrenheit(springfieldData.temp) + '\u00B0';
  mainContainer.appendChild(temperature);

  tempHigh.textContent = 'High: ' + kelvinToFahrenheit(springfieldData.temp_max) + '\u00B0';
  mainContainer.appendChild(tempHigh);

  tempLow.textContent = 'Low: ' + kelvinToFahrenheit(springfieldData.temp_min) + '\u00B0';
  mainContainer.appendChild(tempLow);

  seaLevel.textContent = springfieldData.sea_level + 'ft above sea level';
  mainContainer.appendChild(seaLevel);
}
