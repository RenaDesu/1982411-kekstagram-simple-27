import {body, editForm} from './dom-elements.js';
// 1-я вспомогательная функция
function getRandomIntInclusive(from, to) {

  if (from < 0 || to < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2-я вспомогательная функция
const checkStringLength = (string, maxLength) =>
  string.length <= maxLength;

// isEscapeKey
const isEscapeKey = (evt) => evt.key === 'Escape';

//Сообщение об успешной загрузке
const successPopUpTemplate = document.querySelector('#success').content.querySelector('.success');

const showSuccessPopUp = () => {
  const successPopUpFragment = document.createDocumentFragment();
  const successPopUp = successPopUpTemplate.cloneNode(true);
  successPopUpFragment.appendChild(successPopUp);
  body.appendChild(successPopUpFragment);
  //Закрытие сообщения об успешной загрузке
  const onEditFormEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessPopUp();
    }
  };
  document.addEventListener('keydown', onEditFormEscKeydown);
  const successButton = document.querySelector('.success__button');
  const popUp = document.querySelector('.success');
  function closeSuccessPopUp () {
    popUp.classList.add('hidden');
    document.removeEventListener('keydown', onEditFormEscKeydown);
  }
  successButton.addEventListener('click', closeSuccessPopUp);
};

//Сообщение об ошибке
const errorPopUpTemplate = document.querySelector('#error').content.querySelector('.error');

const showErrorPopUp = () => {
  const errorPopUpFragment = document.createDocumentFragment();
  const errorPopUp = errorPopUpTemplate.cloneNode(true);
  errorPopUpFragment.appendChild(errorPopUp);
  body.appendChild(errorPopUpFragment);
  editForm.classList.add('hidden');
};

export {
  getRandomIntInclusive,
  checkStringLength,
  isEscapeKey,
  showSuccessPopUp,
  showErrorPopUp
};
