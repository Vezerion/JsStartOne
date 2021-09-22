"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);
console.log(typeof(numberOfFilms));

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);