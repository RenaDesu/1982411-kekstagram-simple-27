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
  const successButton = document.querySelector('.success__button');
  const successMessage = document.querySelector('.success');
  function closeSuccessPopUp () {
    successMessage.classList.add('hidden');
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
  //Закрытие сообщения об ошибке
  const errorButton = document.querySelector('.error__button');
  const errorMessage = document.querySelector('.error');
  function closeErrorPopUp () {
    errorMessage.classList.add('hidden');
    editForm.classList.remove('hidden');
    body.classList.add('modal-open');
  }
  errorButton.addEventListener('click', closeErrorPopUp);
};

//Ошибка загрузки фотографий с сервера
const ALERT_SHOW_TIME = 10000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomIntInclusive,
  checkStringLength,
  isEscapeKey,
  showSuccessPopUp,
  showErrorPopUp,
  showAlert
};
