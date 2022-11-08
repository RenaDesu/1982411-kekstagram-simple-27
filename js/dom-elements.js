const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = uploadForm.querySelector('#upload-file');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const editFormCancel = uploadForm.querySelector('#upload-cancel');
const submitButton = uploadForm.querySelector('#upload-submit');
const commentField = uploadForm.querySelector('.text__description');
const buttonSmaller = uploadForm.querySelector('.scale__control--smaller');
const buttonBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleField = uploadForm.querySelector('.scale__control--value');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
const effectsList = uploadForm.querySelector('.effects__list');
const effectLevelSlider = uploadForm.querySelector('.effect-level__slider');
const effectLevelValue = uploadForm.querySelector('.effect-level__value');

export {
  body,
  uploadForm,
  uploadButton,
  editForm,
  editFormCancel,
  submitButton,
  commentField,
  buttonSmaller,
  buttonBigger,
  scaleField,
  imgPreview,
  effectsList,
  effectLevelSlider,
  effectLevelValue,
};
