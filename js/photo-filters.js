import {
  imgPreview,
  effectsList,
  effectLevelSlider,
  effectLevelValue
} from './dom-elements.js';

const filterEffects = [{
  effect: 'effects__preview--none',
  id: 'effect-none'
},
{
  effect: 'effects__preview--chrome',
  id: 'effect-chrome'
},
{
  effect: 'effects__preview--sepia',
  id: 'effect-sepia'
},
{
  effect: 'effects__preview--marvin',
  id: 'effect-marvin'
},
{
  effect: 'effects__preview--phobos',
  id: 'effect-phobos'
},
{
  effect: 'effects__preview--heat',
  id: 'effect-heat'
}
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

// Слайдер интесивности эффектов, еще в работе
const cnangeEffectIntensivity = () => {
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    connect: 'lower',
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  });

  effectsList.addEventListener('change', (evt) => {
  // кажется, что условие не срабатывает
    if (evt.target.checked && evt.target.id === filterEffects[1].id) {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }
  });
};
export {setPhotoFilters, cnangeEffectIntensivity};
