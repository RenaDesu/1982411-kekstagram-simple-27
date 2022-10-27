import './util.js';
import './data.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, validateuploadForm} from './upload-form.js';
import {changeScale} from './photo-scale.js';
import {setPhotoFilters, changeEffectIntensity} from './photo-filters.js';
import './dom-elements.js';

renderUserPhotos();
uploadNewPhoto();
validateuploadForm();
changeScale();
setPhotoFilters();
changeEffectIntensity();
