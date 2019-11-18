function replaceString(text, oldString, newString) {
  if (typeof text === 'string' 
    && typeof oldString === 'string' 
    && typeof newString === 'string'
    && text.indexOf(oldString) >= 0) {
      return text = text.slice(0, text.indexOf(oldString)) + newString + text.slice(text.indexOf(oldString) + oldString.length, text.length);
  }
  return false;
}
console.log(replaceString('My code is beautiful', 'beautiful', 'BAD')); //true
console.log(replaceString('Made in Chine', 'Ilysha', 'China')); //false