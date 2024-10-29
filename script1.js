/* I.
функция, которая принимает массив символов, а возвращает слова

//Вариант 1
let semantics // осмысленный набор символов - слова
function getWords (setOfSimbols) {
semantics = setOfSimbols.join('');
  return semantics;
}
getWords(['с', 'а', 'м', 'ы', 'х', ' ', 'ч', 'е', 'с', 'т', 'н', 'ы', 'х', ' ', 'п', 'р', 'а', 'в', 'и', 'л']);
console.log(semantics);*/

// Вариант 2
/*let semantics;
function getWords (setOfSimbols) {
  semantics = setOfSimbols.join('');
  return semantics
}*/

/*const word1 = ['с', 'а', 'м', 'ы', 'х'];
const word2 = ['ч', 'е', 'с', 'т', 'н', 'ы', 'х'];
const word3 = ['п', 'р', 'а', 'в', 'и', 'л'];*/
// const quote =( word1.concat([' ']).concat(word2).concat([' ']).concat(word3)).join('');
// console.log(quote);

// Вариант 3

let quote
function getQuote(word1, word2, word3) {
  quote = (['"'].concat(word1).concat([' ']).concat(word2).concat([' ']).concat(word3).concat([`\"`])).join('');
  return quote
}

getQuote(['с', 'а', 'м', 'ы', 'х'], ['ч', 'е', 'с', 'т', 'н', 'ы', 'х'], ['п', 'р', 'а', 'в', 'и', 'л']);
console.log(quote);

/* ------------------------------------------------------
II.
функция которая принимает объект с данными пользователя и выводит строку «Привет, username, вам age лет!», где в username поставлено имя, а в age — возраст пользователя.// (подстановка template strings)*/

const user = {
  name: 'Фемистоклюс',
  age: 60
};

let userStrData;

// Вариант 1
function convertObjToStr(user) {
  userStrData = user.toString()
  // userStrData = JSON.stringify(user);
  return userStrData
}

convertObjToStr(any1);
console.log(userStrData);

// Вариант 2
convertObjToStr = (user) => console.log(`Привет, ${user.name}, Вам ${user.age} лет`);
convertObjToStr = (user) => `Привет, ${user.name}, Вам ${user.age}`;
concole.log(convertObjToStr)