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

// ДЗ по 4му разделу

const USER_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const PHOTO_URL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const photoDescription = 'Какая-то фотография';
const photoLikes = getRandomIntInclusive(15, 200);
const photoComments = getRandomIntInclusive(0, 200);
const CATALOG_DESCRIPTION_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createDescription = () => ({
  id: getRandomArrayElement(USER_ID),
  url: `photos/${getRandomArrayElement(PHOTO_URL)}.jpg`,
  description: photoDescription,
  likes: getRandomIntInclusive(photoLikes, photoLikes),
  comments: getRandomIntInclusive(photoComments, photoComments),
});

const catalogDescription = Array.from({
  length: CATALOG_DESCRIPTION_COUNT
}, createDescription);

