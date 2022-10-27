import {
  imgPreview,
  effectsList
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

const photoFilters = () => {
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

export {photoFilters};
