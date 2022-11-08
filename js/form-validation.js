import {
  uploadForm,
  submitButton,
} from './dom-elements.js';

import {showErrorPopUp, showSuccessPopUp} from './util.js';

const pristine = new Pristine(uploadForm, {
  classTo: 'text__description-label',
  errorTextParent: 'text__description-label',
  errorTextClass: 'text__error-text',
});

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
      const formData = new FormData(evt.target);
      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess(showSuccessPopUp());
          } else {
            showErrorPopUp();
          }
        })
        .catch(() => {
          showErrorPopUp();
        });
    }
  });
};

export {validateUploadForm};
