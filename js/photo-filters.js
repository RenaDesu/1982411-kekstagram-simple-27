import {
  imgPreview,
  uploadForm,
  effectLevelSlider,
  effectLevelValue
} from './dom-elements.js';

const FILTER_EFFECTS = [
  {name: 'none', min: 0, max: 100, step: 1},
  {name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, units: ''},
  {name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, units: ''},
  {name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, units: '%'},
  {name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, units: 'px'},
  {name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, units: ''}
];

const DEFAULT_EFFECT = FILTER_EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefaultEffect = () => currentEffect === DEFAULT_EFFECT;

const updateEffect = () => {
  effectLevelSlider.classList.remove('hidden');
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start:  currentEffect.max,
    step:  currentEffect.step,
  });

  if (isDefaultEffect()) {
    effectLevelSlider.classList.add('hidden');
  }
};

const onUploadFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = FILTER_EFFECTS.find((effect) => effect.name === evt.target.value);
  updateEffect();
};

const onEffectUpdate = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
  effectLevelValue.value = '';
  if (isDefaultEffect()) {
    return;
  }
  const effectValue = effectLevelSlider.noUiSlider.get();
  imgPreview.style.filter = `${currentEffect.style}(${effectValue}${currentEffect.units})`;
  imgPreview.classList.add(`effects__preview--${currentEffect.name}`);
  effectLevelValue.value = effectValue;
};

const setDefaultEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  updateEffect();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
updateEffect();

uploadForm.addEventListener('change', onUploadFormChange);
effectLevelSlider.noUiSlider.on('update', onEffectUpdate);

export {setDefaultEffect};
