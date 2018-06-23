let request = new XMLHttpRequest();
let requestUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
  let weatherData = request.response;
  let mainContainer = document.getElementById('weather-container');

  for(let town of weatherData.towns) {
    let townContainer = document.createElement('div');
    let title = document.createElement('h3');
    let list = document.createElement('ul');
    let motto = document.createElement('li');
    let yearFounded = document.createElement('li');
    let population = document.createElement('li');
    let rainfall = document.createElement('li');

    title.textContent = town.name;
    townContainer.appendChild(title);

    motto.textContent = 'Motto: ' + town.motto;
    yearFounded.textContent = 'Founded: ' + town.yearFounded;
    population.textContent = 'Population: ' + town.currentPopulation;
    rainfall.textContent = 'Average Rainfall: ' + town.averageRainfall;

    list.appendChild(motto);
    list.appendChild(yearFounded);
    list.appendChild(population);
    list.appendChild(rainfall);
    townContainer.appendChild(list);

    mainContainer.appendChild(townContainer);
  }
}
