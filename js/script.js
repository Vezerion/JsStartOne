"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
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

for (let i = 0; i < 2; i++)
{
    const a = prompt("Один из послдених просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его?", '');

    // if(a != null && b != null && a != '' && b != '' && a.length < 50){
    //     personalMovieDB.movies[a] = b;
    //     console.log('done');
    // }
    // else {
    //     console.log('error');
    //     i--;
    // }
    if (a == null || b == null || a.length > 50 || a == '' || b == ''){
        i--;
    }
    else {
        personalMovieDB.movies[a] = b;
    }
}

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

// if (personalMovieDB.count < 10){
//     alert('Просмотрено довольно мало фильмов');
// }
// else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// }
// else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман');
// }
// else {
//     alert('Произошла ошибка');
// }

console.log(personalMovieDB.movies);