import {getRandomIntInclusive, checkStringLength} from './util.js';
import {createDescriptions} from './data.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, validateUserComment} from './upload-form.js';
import {changeScale} from './photo-scale.js';

renderUserPhotos();
uploadNewPhoto();
validateUserComment();
changeScale();
