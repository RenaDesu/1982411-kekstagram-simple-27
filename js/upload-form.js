import {isEscapeKey} from './util.js';
import {setDefaultScale} from './photo-scale.js';
import {setDefaultEffect} from './photo-filters.js';
import {
  body,
  uploadButton,
  uploadForm,
  editForm,
  editFormCancel,
  commentField
} from './dom-elements.js';


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
  uploadForm.reset();
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.value = '';
  commentField.value = '';
  setDefaultScale();
  setDefaultEffect();
  document.removeEventListener('keydown', onEditFormEscKeydown);
}

const uploadNewPhoto = () => {
  uploadButton.addEventListener('input', () => {
    openEditForm();
  });

  editFormCancel.addEventListener('click', () => {
    closeEditForm();
  });
};

export {uploadNewPhoto, openEditForm, closeEditForm, onEditFormEscKeydown};
