const thumbnailTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const thumbnailElement = thumbnailTemplateElement.cloneNode(true);
  const img = thumbnailElement.querySelector('.picture__img');
  img.src = picture.url;
  img.alt = picture.description;
  img.dataset.photoId = picture.id;
  thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;
  thumbnailElement.querySelector('.picture__comments').textContent = picture.comments.length;
  return thumbnailElement;
};

const generateThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    fragment.append(thumbnailElement);
  });

  containerElement.append(fragment);
};

export {generateThumbnails};
