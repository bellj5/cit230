var expandBtn = document.querySelector('.nav-expand');
var homeNav = document.querySelector('.home-nav');

expandBtn.onclick = function() {
  homeNav.classList.toggle('nav-show');
}
