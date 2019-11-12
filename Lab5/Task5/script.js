function check(data, expectedType) {
  if ((expectedType === 'array' && Array.isArray(data)) || (expectedType === 'number' && Number.isInteger(data)) || (expectedType === 'null' && data === null) || (expectedType === 'string' && typeof data === 'string') || (expectedType === 'object' && typeof data === 'object')) {
    return true;
  } else {
    return false;
  }
}
console.log(check([], 'number')); // false or throw ValidationError
console.log(check([], 'array')); // false or throw ValidationError
console.log(check('sdsafdfgers', 'object'));
console.log(check(null, 'null')); // true
console.log(check('test', 'string')); // true