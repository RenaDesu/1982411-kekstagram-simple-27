import {uploadForm} from './upload-form.js';

const buttonSmaller = uploadForm.querySelector('.scale__control--smaller');
const buttonBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleField = uploadForm.querySelector('.scale__control--value');
const imgPreview = uploadForm.querySelector('.img-upload__preview');
const MIN_SCALE_INDEX = 25;
const MAX_SCALE_INDEX = 100;
let scaleFieldValue = 100;

const changeScale = () => {
  const changeScaleSmaller = () => {
    if (scaleFieldValue > MIN_SCALE_INDEX) {
      scaleFieldValue -= MIN_SCALE_INDEX;
      scaleField.value = `${scaleFieldValue}%`;
      imgPreview.style.transform = `scale(${scaleFieldValue / 100})`;
    }
  };

  const changeScaleBigger = () => {
    if (scaleFieldValue < MAX_SCALE_INDEX) {
      scaleFieldValue += MIN_SCALE_INDEX;
      scaleField.value = `${scaleFieldValue}%`;
      imgPreview.style.transform = `scale(${scaleFieldValue / 100})`;
    }
  };

  buttonSmaller.addEventListener('click', () => {
    changeScaleSmaller();
  });

  buttonBigger.addEventListener('click', () => {
    changeScaleBigger();
  });
};

export {changeScale};
