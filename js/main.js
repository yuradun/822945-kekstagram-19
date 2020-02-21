'use strict';

var messages = ['В целом всё неплохо. Но не всё.',
 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
 'Всё отлично!',
 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];

var names = ['Илья', 'Юра', 'Настя', 'Катя', 'Илон', 'Стив'];

var createOneRandomElement = function (mass) { //ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ОДНОГО РАНДОМНОГО ЭЛЕМЕНТА МАССИВА
  return mass[randomInteger (0, mass.length)];
}

var createTwoRandomElement = function (mass) { //ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ДВУХ РАНДОМНЫХ ЭЛЕМЕНТОВ МАССИВА
  var firstElement = mass[randomInteger (0, mass.length)];
  var secondElement = mass[randomInteger (0, mass.length)];
  if (firstElement == secondElement)
    secondElement += 1;
  return firstElement + ' ' + secondElement;
}

var photos = []; //МАССИВ ДЛЯ ОБЪЕКТОВ

var createPhotos = function () {
  for (var i = 1; i < 26; i++) {
    var randomNumberForMess = randomInteger (0, 1); //ГЕНЕРИРУЕМ СЛУЧАЙНОЕ ЧИСЛО ДЛЯ message(randomNumberForMess)
    var photosDescription = {
      url : 'photos/' + i + '.jpg',
      description : 'Адихаю',
      likes : randomInteger (15, 200),
      comments : {
        avatar : "img/avatar-" + randomInteger (1, 6) + ".svg",
        message : randomNumberForMess == 0 ? createOneRandomElement (messages) : createTwoRandomElement (messages),
      	name : createOneRandomElement (names)
      }
    }
  	photos.push (photosDescription); //ДОБАВЛЕНИЕ КАЖДОГО СГЕНЕРИРОВАННОГО ОБЪЕКТА В МАССИВ PHOTOS
  }
}
