'use strict';

var randomMess = ['В целом всё неплохо. Но не всё.',
 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var CreatePhoto = function (){
	for (var i = 1; i < 26; i++) {
		var photo = [
		{
		url = 'photos/' + i + '.jpg',
		description = 'Адихаю',
		likes = randomInteger(15, 200),
		comments = {
			avatar: "img/avatar-" + randomInteger(1, 6) + ".svg",
			message: randomMess[randomInteger(0, 2)],
	    	name: "Пользователь"
		}
		}	
		]
}
}

