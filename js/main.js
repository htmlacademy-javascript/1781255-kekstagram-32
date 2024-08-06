import {generateThumbnails} from './thumbnail.js';
import {createBigPhoto} from './full-photo.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

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
  generateThumbnails(data);
  createBigPhoto(data);
} catch {
  showAlert();
}
