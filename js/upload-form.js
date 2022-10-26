import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = uploadForm.querySelector('#upload-file');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const editFormCancel = uploadForm.querySelector('#upload-cancel');
const submitButton = uploadForm.querySelector('#upload-submit');
const commentField = uploadForm.querySelector('.text__description');

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


const validateUserComment = () => {
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

export {uploadNewPhoto, validateUserComment};
