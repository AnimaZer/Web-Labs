function typicalDay() {
  alert("This Is just a typical day");
}

function themeSelector() {
  var calendarTheme = document.getElementById("themeSelector");
  var calendarElements = document.getElementsByClassName("item");
  if (calendarTheme.value == "Dark") {
    for (var i = 0; i < calendarElements.length; i++) {
      calendarElements[i].classList.add("calendar-dark");
      document
        .getElementsByClassName("calendar")[0]
        .classList.add("calendar-dark");
      document
        .getElementsByClassName("calendar-day")[0]
        .classList.add("calendar-dark");
      document
        .getElementsByClassName("calendar-head")[0]
        .classList.add("calendar-dark");
      document
        .getElementsByClassName("calendar-month")[0]
        .classList.add("calendar-dark");
    }
  } else {
    for (var i = 0; i < calendarElements.length; i++) {
      calendarElements[i].classList.remove("calendar-dark");
      document
        .getElementsByClassName("calendar")[0]
        .classList.remove("calendar-dark");
      document
        .getElementsByClassName("calendar-day")[0]
        .classList.remove("calendar-dark");
      document
        .getElementsByClassName("calendar-head")[0]
        .classList.remove("calendar-dark");
      document
        .getElementsByClassName("calendar-month")[0]
        .classList.remove("calendar-dark");
    }
  }
}
