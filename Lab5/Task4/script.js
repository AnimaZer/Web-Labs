function isTimeRangesIntersect(timeRange1, timeRange2) {
  if ((timeRange1[0] >= timeRange2[0] && timeRange1[0] <= timeRange2[1]) || (timeRange2[0] >= timeRange1[0] && timeRange2[0] <= timeRange1[1])) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true