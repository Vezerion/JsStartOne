"use strict";
//
// Objects
//
// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I finished this lesson');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//         font: {
//             size: 14,
//             color: 'white'
//         }
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };

// options.makeTest();

// const {size, color} = options.colors.font;
// console.log(color);

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} в объекте ${key} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }
//     else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
//
// Массивы и псевдомассивы
//
// const arr = [1, 2, 4, 6, 8];
// arr[99] = 0;
// console.log(arr.length); // Свойство length состоит из индекса последнего элемента массива + 1
// console.log(arr);

// arr.forEach(function(item, i, arr) {
    // console.log(`${i}: ${item} внутри массива ${arr}`); 
// }); // item элемент массива, i номер по порядку, arr ссылка на массив который перебираем

// arr.pop(); //Удаляет последний элемент массива
// arr.push(10); //Добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
// }

// for (let value of arr) {
    // console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join("; "));

// const array = [2, 14, 26, 7, 10];
// array.sort();
// console.log(array);
// array.sort(compareNum);
// console.log(array);

// function compareNum(a, b) {
//     return a - b;
// }
//
//Передача по ссылке или по значению, Spread оператор(ES6-ES9)
//
// let a = 5,
//     b = a; // Передает значение

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передает ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'aaadaddad';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);
// console.log(video);
// console.log(blogs);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q};

// newQ.two = 4;

// console.log(q);
// console.log(newQ);
//
//Основы ООП, прототипно-ориентированное наследование
//
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier); // Новый способ

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; // Старый способ(не используется)

// Object.setPrototypeOf(jonh, soldier); // Новый способ


// console.log(jonh.armor);
// jonh.sayHello();
//
//Динамическая типизация в JS
//
//To String
// 1)
// console.log(typeof(String(null)));

// console.log(typeof(String(4)));
// 2)
// console.log(typeof(5 + ''));
// console.log(typeof(null + ''));

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

//To Number

// 1)
// console.log(typeof(Number('4')));

// 2)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("How old are you?", "");
// Все что получаем от пользователя является строкой

// To Boolean

// Пустота всегда false
// Всегда превращается в false: 0, ''(пустая строка), null, undefined, NaN; 

// 1)

// let switcher = null;

// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;
// if (switcher) {
//     console.log("Working...");
// }

// 2)

// console.log(typeof(Boolean('4')));

// 3)

// console.log(typeof(!!"44444"));