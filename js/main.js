// 1-я функция, источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

getRandomIntInclusive();

// 2-я функция
function checkStringLength(string, maxLength) {
  if (string <= maxLength) {
    return true;
  }
  return false;
}

checkStringLength();
