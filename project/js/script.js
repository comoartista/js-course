/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        'Бор', 
        'Афіна'
    ]
};

const promo = document.querySelectorAll('.promo__adv')

promo.forEach(element => {
    element.remove();
});

document.querySelector('.promo__genre').innerHTML = 'драма'

document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

let movieList = document.querySelector('.promo__interactive-list')

movieList.innerHTML = ''
const showMovieList = (arr) => {
    const sortArr = arr.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    })
    sortArr.forEach((movie, i) => {
        let movieElem = document.createElement('li')
        movieElem.classList.add('promo__interactive-item');
        movieElem.innerHTML = `${i+1} ${movie} `;
        movieList.append(movieElem)
    }) 
}

showMovieList(movieDB.movies)

const sort = () => {
    arr.sort()
}