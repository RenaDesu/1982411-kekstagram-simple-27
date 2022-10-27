import {getRandomIntInclusive, checkStringLength} from './util.js';
import {createDescriptions} from './data.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, validateuploadForm} from './upload-form.js';
import {changeScale} from './photo-scale.js';
import {photoFilters} from './photo-filters.js';
import './dom-elements.js';

renderUserPhotos();
uploadNewPhoto();
validateuploadForm();
changeScale();
photoFilters();
