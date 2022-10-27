import {
  buttonSmaller,
  buttonBigger,
  scaleField,
  imgPreview
} from './dom-elements.js';

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
