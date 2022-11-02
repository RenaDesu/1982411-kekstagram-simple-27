import {
  buttonSmaller,
  buttonBigger,
  scaleField,
  imgPreview
} from './dom-elements.js';

const SCALE_STEP_INDEX = 25;
const MIN_SCALE_INDEX = 25;
const MAX_SCALE_INDEX = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  scaleField.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(scaleField.value, 10);
  let newValue = currentValue - SCALE_STEP_INDEX;
  if (newValue < MIN_SCALE_INDEX) {
    newValue = MIN_SCALE_INDEX;
  }
  scaleImage(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(scaleField.value, 10);
  let newValue = currentValue + SCALE_STEP_INDEX;
  if (newValue > MAX_SCALE_INDEX) {
    newValue = MAX_SCALE_INDEX;
  }
  scaleImage(newValue);
};

buttonSmaller.addEventListener('click', onButtonSmallerClick);
buttonBigger.addEventListener('click', onButtonBiggerClick);

const setDefaultScale = () => {
  scaleImage();
};

export {setDefaultScale};
