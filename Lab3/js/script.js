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
    for (var i = 0; i < calendarElements.length; i++) {
      calendarElements[i].classList.add('calendar-dark');
      document.getElementsByClassName('calendar')[0]
        .classList.add('calendar-dark');
      document.getElementsByClassName('calendar-day')[0]
        .classList.add('calendar-dark');
      document.getElementsByClassName('calendar-month')[0]
        .classList.add('calendar-dark');
    }
  } else {
    for (var i = 0; i < calendarElements.length; i++) {
      calendarElements[i].classList.remove('calendar-dark');
      document.getElementsByClassName('calendar')[0]
        .classList.remove('calendar-dark');
      document.getElementsByClassName('calendar-day')[0]
        .classList.remove('calendar-dark');
      document.getElementsByClassName('calendar-month')[0]
        .classList.remove('calendar-dark');
    }
  }
}
