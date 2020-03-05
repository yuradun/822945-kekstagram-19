'use strict';

var messages = ['В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
var names = ['Илья', 'Юра', 'Настя', 'Катя', 'Илон', 'Стив'];
var descriptions = ['Все клево, отдыхаю', 'Попиваю сок у себя на квартале', 'Отдыхаю после рабочего дня', 'Сегодня пятница!', 'Ставьте лайки!1!'];
var images = [];

var randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var createOneRandomElement = function (mass) {
  return mass[randomInteger(0, mass.length)];
};
var addPhotos = function () {
  for (var i = 1; i < 26; i++) {
    var randomNumberForMassMess = randomInteger(0, 1);
    var photoMessages = [];
    if (randomNumberForMassMess === 0) {
      photoMessages[0] = createOneRandomElement(messages);
    } else {
      photoMessages[0] = createOneRandomElement(messages);
      photoMessages[1] = createOneRandomElement(messages);
    }
    var photosDescription = {
      url: 'photos/' + i + '.jpg',
      description: createOneRandomElement(descriptions),
      likes: randomInteger(15, 200),
      comments: {
        avatar: 'img/avatar-' + randomInteger(1, 6) + '.svg',
        message: photoMessages,
        name: createOneRandomElement(names)
      }
    };
    images.push(photosDescription);
  }
};
addPhotos();

var renderPhotos = function (mass) {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
  var pictureFragment = document.createDocumentFragment();
  for (var i = 0; i < mass.length; i++) {
    var clone = pictureTemplate.cloneNode(true);
    clone.querySelector('.picture__img').src = mass[i].url;
    clone.querySelector('.picture__comments').textContent = mass[i].comments.length;
    clone.querySelector('.picture__likes').textContent = mass[i].likes;
    pictureFragment.appendChild(clone);
  }
  var container = document.querySelector('.pictures.container');
  container.appendChild(pictureFragment);

};
renderPhotos(images);

// module4

var buttonUploadImage = document.querySelector('#upload-file');
var photoSettingsWindow = document.querySelector('.img-upload__overlay');
var photoSettingsWindowClose = photoSettingsWindow.querySelector('.img-upload__cancel');

buttonUploadImage.addEventListenner('click', function () {
  photoSettingsWindow.classList.remove('hidden');
});

photoSettingsWindowClose.addEventListenner('click', function () {
  photoSettingsWindow.classList.add('hidden');
});
