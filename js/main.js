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


const CATALOG_DESCRIPTION_COUNT = 25;
const photoDescription = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Posuere ac ut consequat semper viverra. At volutpat diam ut venenatis tellus.',
  'Feugiat scelerisque varius morbi enim nunc faucibus.',
  'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.',
  'Libero enim sed faucibus turpis in eu mi bibendum.',
  'Nulla at volutpat diam ut venenatis tellus in.',
  'Sed viverra tellus in hac habitasse platea dictumst vestibulum.',
  'Sed adipiscing diam donec adipiscing tristique.',
  'At auctor urna nunc id cursus metus aliquam eleifend mi.',
  'Parturient montes nascetur ridiculus mus mauris vitae.'
];


const createDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: photoDescription[getRandomIntInclusive(0, photoDescription.length - 1)],
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200),
});

const catalogDescription = Array.from({
  length: CATALOG_DESCRIPTION_COUNT
}, (_, index) => createDescription(index + 1));
console.log(catalogDescription);
