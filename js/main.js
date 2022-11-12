import {showAlert} from './util.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, closeEditForm} from './upload-form.js';
import {validateUploadForm} from './form-validation.js';
import './photo-scale.js';
import './photo-filters.js';
import './dom-elements.js';
import {getData} from './api.js';

uploadNewPhoto();

getData(renderUserPhotos, () => showAlert('Ошибка загрузки'));

validateUploadForm(closeEditForm);
