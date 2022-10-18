import {createDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');


const userPhotos = createDescriptions();

const userPhotosFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = url;
  userPhoto.querySelector('.picture__comments').textContent = comments;
  userPhoto.querySelector('.picture__likes').textContent = likes;
  userPhotosFragment.appendChild(userPhoto);
});
picturesContainer.appendChild(userPhotosFragment);
