"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++)
    {
        const a = prompt("Один из послдених просмотренных фильмов?", ''),
              b = prompt("На сколько оцените его?", '');
        if (a == null || b == null || a.length > 50 || a == '' || b == ''){
            i--;
        }
        else {
            personalMovieDB.movies[a] = b;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    switch (true){
        case personalMovieDB.count < 10: 
            alert('Просмотрено довольно мало фильмов');
            console.log('Просмотрено довольно мало фильмов');
            break;
        case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
            alert('Вы классический зритель');
            console.log('Вы классический зритель');
            break;
        case personalMovieDB.count >= 30:
            alert('Вы киноман');
            console.log('Вы киноман');
            break;
        default:
            alert('Произошла ошибка');
            console.log('Произошла ошибка');
            break;
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();