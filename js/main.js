import './util.js';
import './data.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, validateuploadForm} from './upload-form.js';
import './photo-scale.js';
import './photo-filters.js';
import './dom-elements.js';

renderUserPhotos();
uploadNewPhoto();
validateuploadForm();

