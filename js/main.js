import {getRandomIntInclusive, checkStringLength} from './util.js';
import {createDescriptions} from './data.js';
import {renderUserPhotos} from './gallery.js';
import {uploadNewPhoto, validateUserComment} from './upload-form.js';

renderUserPhotos();
uploadNewPhoto();
validateUserComment();
