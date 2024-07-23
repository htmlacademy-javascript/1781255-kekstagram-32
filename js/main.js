import {getPictures} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import {createBigPhoto} from './full-photo.js';

const data = getPictures();
generateThumbnails(data);
createBigPhoto(data);
