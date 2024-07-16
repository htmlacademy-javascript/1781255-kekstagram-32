import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Александр',
  'Борис',
  'Вера',
  'Виктор',
  'Владимир',
  'Вячеслав',
  'Гарик',
  'Дмитрий',
  'Илья',
  'Ира',
  'Мария',
  'Николай',
  'Олег',
  'Оля',
  'Павел',
  'Роман',
  'Станислав',
  'Юра',
];

const DESCRIPTIONS = [
  'Культурно отдыхаем',
  'Прикупил вкусного',
  'Вперед, к приключениям!',
  'На дне рождения',
  'Отдых на море',
  'В ожидании чуда',
  'Классный бар на улице Правды',
  'Записался в спортзал',
  'Мальчишник!',
  'Сходили в кино',
  'Утренняя проблежка',
  'Сегодня — самый лучший день',
  'Типичный я',
  'Закрылся на выходные смотреть сериал',
  'Себяшечка в ленту',
  'Будет гроза...',
  'Готовлю ролы',
  'Заболеть летом - done',
  'Немного пришел в себя',
  'Стартуем на дачу!',
  'Катим на велосипедах',
  'Новые кросы',
  'Сгоняли на речку',
  'Усиавший, но довольный',
  'Домой, пора домой!',
];

const Likes = {
  MIN: 15,
  MAX: 200,
};
const Photos = {
  MIN: 0,
  MAX: 25
};
const Comment = {
  MIN: 0,
  MAX: 30,
};
const Avatar = {
  MIN: 1,
  MAX: 6,
};

const generateRandomId = createIdGenerator();

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomArrayElement(COMMENT_LINES),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from(
    {length: getRandomInteger(Comment.MIN, Comment.MAX)},
    createComment
  )
});

const getPictures = () => Array.from(
  {length: Photos.MAX},
  (_, index) => createPicture(index + 1)
);

const pictures = getPictures();
// eslint-disable-next-line no-console
console.log(pictures);

export {getPictures};
