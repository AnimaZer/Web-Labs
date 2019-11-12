function pulloutArray(array) {
  if (Array.isArray(array)) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          if (Number.isInteger(array[i][j]))
            result.push(array[i][j]);
        }
      } else if (Number.isInteger(array[i])) {
        result.push(array[i]);
      }
    }
  }
  return result;
}

console.log(pulloutArray([1, 2, 3])); // return [1, 2, 3]
console.log(pulloutArray([])); // return []
console.log(pulloutArray([1, [2, 3, 4], 5])); // return [1, 2, 3, 4, 5]
console.log(pulloutArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(pulloutArray([1, [1], null, NaN, ['test']])); // return [1, 1]