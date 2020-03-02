'use strict';

var messages = ['В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
var names = ['Илья', 'Юра', 'Настя', 'Катя', 'Илон', 'Стив'];
var descriptions = ['Все клево, отдыхаю', 'Попиваю сок у себя на квартале', 'Отдыхаю после рабочего дня', 'Сегодня пятница!', 'Ставьте лайки!1!'];
var images = []; // МАССИВ ДЛЯ ОБЪЕКТОВ

var randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var createOneRandomElement = function (mass) { //  ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ОДНОГО РАНДОМНОГО ЭЛЕМЕНТА МАССИВА
  return mass[randomInteger(0, mass.length)];
};

/* var createTwoRandomElement = function (mass) { // ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ДВУХ РАНДОМНЫХ ЭЛЕМЕНТОВ МАССИВА
  var firstElement = mass[randomInteger(0, mass.length)];
  var secondElement = mass[randomInteger(0, mass.length)];
  if (firstElement === secondElement) {
    secondElement += 1;
  }
  return firstElement + ' ' + secondElement;
};
*/

var addPhotos = function () {
  for (var i = 1; i < 26; i++) {
    var randomNumberForMassMess = randomInteger(0, 1); // ГЕНЕРИРУЕМ СЛУЧАЙНОЕ ЧИСЛО ДЛЯ message(randomNumberForMess)
    var massMess = [];
    if (randomNumberForMassMess === 0) {
      massMess[0] = createOneRandomElement(messages);
    } else {
      massMess[0] = createOneRandomElement(messages);
      massMess[1] = createOneRandomElement(messages);
    }
    var photosDescription = {
      url: 'photos/' + i + '.jpg',
      description: createOneRandomElement(descriptions),
      likes: randomInteger(15, 200),
      comments: {
        avatar: 'img/avatar-' + randomInteger(1, 6) + '.svg',
        message: massMess,
        name: createOneRandomElement(names)
      }
    };
    images.push(photosDescription); // ДОБАВЛЕНИЕ КАЖДОГО СГЕНЕРИРОВАННОГО ОБЪЕКТА В МАССИВ imageMass
  }
};
addPhotos();

var renderPhotos = function (mass) {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('a'); // находим шаблон для фотографий из html
  var pictureElement = document.createDocumentFragment(); // создаем фрагмент, который и будет вырисовывать нам заполненный шаблон
  for (var i = 0; i < mass.length; i++) {
    pictureTemplate.templateClone.querySelector('.picture__img').src = mass[i].url;
    pictureTemplate.querySelector('.picture__comments').textContent = mass[i].comments.length;
    pictureTemplate.querySelector('.picture__likes').textContent = mass[i].likes;
    pictureElement.appendChild(pictureTemplate);
  }
  // pictureTemplate.appendChild(pictureElement); // !!ТАК НЕ РАБОТАЕТ!!
  var container = document.querySelectorAll('.picture.container');
  container.appendChild(pictureTemplate);

};
renderPhotos(images);
