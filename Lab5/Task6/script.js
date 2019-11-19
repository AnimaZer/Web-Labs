function replaceString(text, oldString, newString) {
  if (typeof text === 'string' &&
    typeof oldString === 'string' &&
    typeof newString === 'string' &&
    text.indexOf(oldString) >= 0) {
      while (text.indexOf(oldString) != -1) {
        text = text.replace(oldString, newString);
      }
    return text;
  }
  return false;
}
console.log(replaceString('My code is beautiful beautiful BISTROF', 'beautiful', 'BAD')); //true
console.log(replaceString('Made in Chine', 'Ilysha', 'China')); //false