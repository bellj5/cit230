let url = window.location.href;
let pageName = url.substring(url.lastIndexOf('.'), url.lastIndexOf('/') + 1);

let currTab = document.querySelector('li > a[href*=' + pageName + ']').parentNode;
currTab.style.background = "lightblue";
