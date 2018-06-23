var footer = document.getElementById('currentdate');

var currentDate = new Date();

var today = currentDate.toDateString();

footer.innerHTML = today;
