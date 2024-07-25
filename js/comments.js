const commentListElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
const commentsLoaderElement = document.querySelector('.comments-loader');
const commentsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');
const COMMENTS_PER_PORTION = 5;
let comments = [];
let commentsShown = 0;

const addComments = () => {
  const commentsElement = comments.slice(commentsShown, commentsShown + COMMENTS_PER_PORTION);
  const commentsElementLength = commentsElement.length + commentsShown;
  commentsElement.forEach(({avatar, name, message}) => {
    const commentItemElement = commentElement.cloneNode(true);
    const pictureElement = commentItemElement.querySelector('.social__picture');
    pictureElement.src = avatar;
    pictureElement.alt = name;
    commentItemElement.querySelector('.social__text').textContent = message;
    commentListElement.append(commentItemElement);
  });
  commentsShownElement.textContent = `${commentsElementLength}`;
  commentsTotalElement.textContent = `${comments.length}`;
  if (comments.length <= commentsElementLength) {
    commentsLoaderElement.classList.add('hidden');
  }
  commentsShown += COMMENTS_PER_PORTION;
};

const clearComments = () => {
  while (commentListElement.firstChild) {
    commentListElement.removeChild(commentListElement.firstChild);
  }
  commentsShown = 0;
  commentsLoaderElement.classList.remove('hidden');
};

const displayComments = (сomments) => {
  comments = сomments;
  addComments();
  commentsLoaderElement.addEventListener('click', addComments);
};

export {displayComments, clearComments};
