import {getPictures} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import {createBigPhoto} from './full_photo.js';

generateThumbnails(getPictures());
createBigPhoto(getPictures());
