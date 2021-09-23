"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

// const a = prompt("Один из послдених просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из послдених просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++){
    let a = prompt("Один из послдених просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB.movies);