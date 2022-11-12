import {body, editForm} from './dom-elements.js';
import {onEditFormEscKeydown} from './upload-form.js';

const ALERT_SHOW_TIME = 10000;

// isEscapeKey
const isEscapeKey = (evt) => evt.key === 'Escape';

//Закрытие сообщений нажатием ESC
const onSuccessPopUpEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessPopUp();
  }
};

const onErrorPopUpEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorPopUp();
    document.addEventListener('keydown', onEditFormEscKeydown);
  }
};

//Закрытие сообщений по клику на пустую область
function onClick(evt) {
  if (!evt.target.matches('.success__inner') && !evt.target.matches('.error__inner')) {
    evt.target.remove();
    evt.target.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onSuccessPopUpEscKeydown);
    document.removeEventListener('keydown', onErrorPopUpEscKeydown);
    if (!(evt.target.matches('.success__button') || evt.target.matches('.success'))) {
      document.addEventListener('keydown', onEditFormEscKeydown);
      editForm.classList.remove('hidden');
    }
  }
}

//Закрытие сообщения об успешной загрузке
function closeSuccessPopUp () {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessPopUpEscKeydown);
}

//Сообщение об успешной загрузке
const showSuccessPopUp = () => {
  const successPopUpTemplate = document.querySelector('#success').content.querySelector('.success');
  const successPopUp = successPopUpTemplate.cloneNode(true);
  body.appendChild(successPopUp);
  document.addEventListener('keydown', onSuccessPopUpEscKeydown);
  successPopUp.querySelector('.success__button').addEventListener('click', closeSuccessPopUp);
  successPopUp.addEventListener('click', onClick);
};

//Закрытие сообщения об ошибке
function closeErrorPopUp () {
  editForm.classList.remove('hidden');
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorPopUpEscKeydown);
}

//Сообщение об ошибке
const showErrorPopUp = () => {
  editForm.classList.add('hidden');
  const errorPopUpTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorPopUp = errorPopUpTemplate.cloneNode(true);
  body.appendChild(errorPopUp);
  document.removeEventListener('keydown', onEditFormEscKeydown);
  document.addEventListener('keydown', onErrorPopUpEscKeydown);
  errorPopUp.querySelector('.error__button').addEventListener('click', closeErrorPopUp);
  errorPopUp.addEventListener('click', onClick);
};

//Ошибка загрузки фотографий с сервера
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
  isEscapeKey,
  showSuccessPopUp,
  showErrorPopUp,
  showAlert
};
