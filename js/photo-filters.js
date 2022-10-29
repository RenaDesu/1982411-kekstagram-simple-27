import {
  imgPreview,
  effectsList,
  effectLevelSlider,
  effectLevelValue,
} from './dom-elements.js';

const filterEffects = [
  {effect: 'effects__preview--none', id: 'effect-none'},
  {effect: 'effects__preview--chrome', id: 'effect-chrome'},
  {effect: 'effects__preview--sepia', id: 'effect-sepia'},
  {effect: 'effects__preview--marvin', id: 'effect-marvin'},
  {effect: 'effects__preview--phobos', id: 'effect-phobos'},
  {effect: 'effects__preview--heat', id: 'effect-heat'}
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
    // Все условия работают, но когда выбирается оригинал, то слайдет удаляется, но не возвращяется, когда выбирается другой эффект.
    if (evt.target.checked && evt.target.id === filterEffects[0].id) {
      return effectLevelSlider.noUiSlider.destroy();
    }
    else if (evt.target.checked && evt.target.id === filterEffects[3].id) {
      return effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    }
    else if (evt.target.checked && evt.target.id === filterEffects[4].id) {
      return effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
    else if (evt.target.checked && evt.target.id === filterEffects[5].id) {
      return effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
    else {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      effectLevelSlider.noUiSlider.set(1);
    }
  });
};
export {setPhotoFilters, setDefaultEffect, changeEffectIntensity};
