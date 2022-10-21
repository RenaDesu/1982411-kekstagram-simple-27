import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = uploadForm.querySelector('#upload-file');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const editFormCancel = uploadForm.querySelector('#upload-cancel');

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

    document.removeEventListener('keydown', onEditFormEscKeydown);
  }

  uploadButton.addEventListener('input', () => {
    openEditForm();
  });

  editFormCancel.addEventListener('click', () => {
    closeEditForm();
  });
};

export {uploadNewPhoto};
