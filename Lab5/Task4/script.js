function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) || Array.isArray(timeRange2)){
    if ((timeRange1[0] >= timeRange2[0] && timeRange1[0] <= timeRange2[1] ) 
      || (timeRange2[0] >= timeRange1[0] && timeRange2[0] <= timeRange1[1])) {
      return true;
    }
    return false;
  }
}

console.log(isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00'])); // return false
console.log(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00'])); // return true