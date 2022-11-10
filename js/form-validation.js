import {
  uploadForm,
  submitButton,
} from './dom-elements.js';
import {showErrorPopUp, showSuccessPopUp} from './util.js';
import {sendData} from './api.js';

const pristine = new Pristine(uploadForm, {
  classTo: 'text__description-label',
  errorTextParent: 'text__description-label',
  errorTextClass: 'text__error-text',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const validateUploadForm = (onSuccess) => {
  uploadForm.addEventListener('input', () => {
    const isValid = pristine.validate();
    if (!isValid) {
      submitButton.setAttribute('disabled', 'disabled');
    } else {
      submitButton.removeAttribute('disabled');
    }
  });

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessPopUp();
        },
        () => {
          showErrorPopUp();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {validateUploadForm};
