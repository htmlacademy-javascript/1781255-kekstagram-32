import {escapeKey} from './util.js';
import {displayComments} from './comments.js';

const createBigPhoto = (listPictures) => {
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
  const commentCountElement = document.querySelector('.social__comment-count');
  const commentLoaderElement = document.querySelector('.comments-loader');
  const containerPhotoElement = document.querySelector('.pictures');
  commentCountElement.classList.add('hidden');
  commentLoaderElement.classList.add('hidden');

  const onDocumentEscKeydown = (evt) => {
    if (escapeKey(evt)) {
      evt.preventDefault();
      closeBigPhoto();
    }
  };

  const openBigPhoto = () => {
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentEscKeydown);
  };
  function closeBigPhoto() {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscKeydown);
  }

  const getDataBigPhoto = (pictureId) => {
    const index = listPictures.findIndex((picture) => pictureId === picture.id.toString());
    const {url, likes, comments, description} = listPictures[index];
    bigPictureElement.querySelector('.big-picture__img img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.social__comment-shown-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__caption').textContent = description;
    displayComments(listPictures[index].comments);
  };

  const onClickPhoto = (evt) => {
    if (evt.target.closest('.picture')) {
      const currentPictureId = evt.target.dataset.pictureId;
      getDataBigPhoto(currentPictureId);
      openBigPhoto();
    }
  };

  containerPhotoElement.addEventListener('click', onClickPhoto);
  bigPictureCloseElement.addEventListener('click', () => {
    closeBigPhoto();
  });
};

export {createBigPhoto};
