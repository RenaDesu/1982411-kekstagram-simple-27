import {
  imgPreview,
  effectsList,
  effectLevelSlider,
  effectLevelValue,
  effectsButton
} from './dom-elements.js';

const filterEffects = [
  {effect: 'effects__preview--none', id: 'effect-none', style: 'none'},
  {effect: 'effects__preview--chrome', id: 'effect-chrome', style: 'grayscale', units: ''},
  {effect: 'effects__preview--sepia', id: 'effect-sepia', style: 'sepia', units: ''},
  {effect: 'effects__preview--marvin', id: 'effect-marvin', style: 'invert', units: '%', min: 0, max: 100, start: 100, step: 1},
  {effect: 'effects__preview--phobos', id: 'effect-phobos', style: 'blur', units: 'px', min: 0, max: 3, start: 3, step: 0.1},
  {effect: 'effects__preview--heat', id: 'effect-heat', style: 'brightness', units: '', min: 1, max: 3, start: 3, step: 0.1,}
];

// Наложение эффектов
const setPhotoFilters = () => {
  const onEffectChange = (evt) => {
    filterEffects.forEach((filterEffect) => {
      const currentEffect = filterEffect.effect;
      if (evt.target.checked && evt.target.id === filterEffect.id) {
        imgPreview.className = currentEffect;
      }
    });
  };

  effectsList.addEventListener('change', onEffectChange);
};

const setDefaultEffect = () => {
  const defaultEffect = filterEffects[0].effect;
  imgPreview.className = defaultEffect;
};

// Слайдер интесивности эффектов, еще в работе
const changeEffectIntensity = () => {
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
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

  effectLevelSlider.noUiSlider.on('update', () => {
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  });

  effectsList.addEventListener('change', (evt) => {
    filterEffects.forEach((filterEffect) => {
      if (evt.target.checked && evt.target.id === filterEffect.id) {
        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: filterEffect.min,
            max: filterEffect.max,
          },
          start:  filterEffect.start,
          step:  filterEffect.step,
        });
      }
    });
  });
};

//почему не работает? проверить
const removeSlider = () => {
  if (effectsButton.checked) {
    effectLevelSlider.classList.add('visually-hidden');
    imgPreview.style.filter = 'none';
  }
};

export {setPhotoFilters, setDefaultEffect, changeEffectIntensity, removeSlider};
