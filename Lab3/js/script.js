window.onload = function () {
  var date = new Date();
  var dateDay = date.getDate();
  var days = document.querySelectorAll('.calendar-day');
  for (var i = 1; i <= days.length; i++) {
    if (dateDay == i+1) days[i].classList.add('today');
  }
};

function themeSelector() {
  var calendarTheme = document.getElementById('theme-selector');
var calendarElements = document.getElementsByClassName('calendar-item');
  if (calendarTheme.value == 'Dark') {
    document.getElementsByClassName('calendar')[0].classList.add('dark');
  } else {
    document.getElementsByClassName('calendar')[0].classList.remove('dark');
}
}