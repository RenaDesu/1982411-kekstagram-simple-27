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

const userId = [];
const photoUrl = [];

for (let i = 0; i < 26; i++) {
  userId.push(i);
  photoUrl.push(i);
}

const photoDescription = 'Какая-то фотография';
const photoLikes = [];
const photoComments = [];

for (let i = 0; i < 201; i++) {
  photoLikes.push(i);
  photoComments.push(i);
}

const CATALOG_DESCRIPTION_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(1, elements.length - 1)];
const getRandomLikesElement = (elements) => elements[getRandomIntInclusive(15, elements.length - 1)];
const getRandomCommentsElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];


const createDescription = () => ({
  id: getRandomArrayElement(userId),
  url: `photos/${getRandomArrayElement(photoUrl)}.jpg`,
  description: photoDescription,
  likes: getRandomLikesElement(photoLikes),
  comments: getRandomCommentsElement(photoComments),
});

const catalogDescription = Array.from({
  length: CATALOG_DESCRIPTION_COUNT
}, createDescription);
console.log(catalogDescription);
