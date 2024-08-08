import {generateThumbnails} from './thumbnail.js';
import {createBigPhoto} from './full-photo.js';
import {getData, sendData} from './api.js';
import {debounce, showAlert} from './util.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {init as initFilter, getFilteredPictures} from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debounceGenerateThumbnails = debounce(generateThumbnails);
  initFilter(data, debounceGenerateThumbnails);
  generateThumbnails(getFilteredPictures());
  generateThumbnails(data);
  createBigPhoto(data);
} catch {
  showAlert();
}
