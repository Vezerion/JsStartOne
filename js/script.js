"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count < 0) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 4; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}`);
            if(a == null || a === "") {
                console.log('Вы ввели некорректные данные или не ввели их совсем');
                i--;
            }
            else {
                personalMovieDB.genres[i - 1] = a;
            }
        }
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${genre}`);
        });
    }
};