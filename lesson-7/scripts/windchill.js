function getChill(avgTemp, speed) {
  var s = speed;
  var t = avgTemp;
  var chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  return Math.round(chill * 100) / 100;
}

var avgTemp = (75 + 48) / 2;
var windSpeed = 5;
document.getElementById('windChill').innerHTML = getChill(avgTemp, windSpeed);
