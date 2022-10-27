import {isEscapeKey} from './util.js';
import {
  body,
  uploadForm,
  uploadButton,
  editForm,
  editFormCancel,
  submitButton,
  commentField
} from './dom-elements.js';

const uploadNewPhoto = () => {
  const onEditFormEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeEditForm();
    }
  };

  function openEditForm () {
    editForm.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEditFormEscKeydown);
  }

  function closeEditForm () {
    editForm.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadButton.value = '';
    commentField.value = '';
    document.removeEventListener('keydown', onEditFormEscKeydown);
  }

  uploadButton.addEventListener('input', () => {
    openEditForm();
  });

  editFormCancel.addEventListener('click', () => {
    closeEditForm();
  });
};

const validateuploadForm = () => {
  const pristine = new Pristine(uploadForm, {
    classTo: 'text__description-label',
    errorTextParent: 'text__description-label',
    errorTextClass: 'text__error-text',
  });

  uploadForm.addEventListener('input', () => {
    const isValid = pristine.validate();
    if (isValid) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'disabled');
    }
  });

  uploadForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });

};

export {uploadNewPhoto, validateuploadForm};
