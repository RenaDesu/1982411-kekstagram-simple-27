// 1-я функция
function getRandomIntInclusive(from, to) {

  if (from < 0 || to < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive();

// 2-я функция
const checkStringLength = (string, maxLength) =>
  string.length <= maxLength;

checkStringLength();

export {getRandomIntInclusive};
