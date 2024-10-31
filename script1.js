/* I.
функция, которая принимает массив символов, а возвращает слова
*/

function getWords(setOfSymbols) {
  return setOfSymbols.join('');
}

const words = getWords(['с', 'а', 'м', 'ы', 'х', ' ', 'ч', 'е', 'с', 'т', 'н', 'ы', 'х', ' ', 'п', 'р', 'а', 'в', 'и', 'л']);
console.log(words);

// Вариант 2
function getQuote(word1, word2, word3) {
  return (['"'].concat(word1).concat([' ']).concat(word2).concat([' ']).concat(word3).concat(['"'])).join('');
}

const quote = getQuote(['с', 'а', 'м', 'ы', 'х'], ['ч', 'е', 'с', 'т', 'н', 'ы', 'х'], ['п', 'р', 'а', 'в', 'и', 'л']);
console.log(quote);


/* ------------------------------------------------------
II.
функция которая принимает объект с данными пользователя и выводит строку «Привет, username, вам age лет!», где в username поставлено имя, а в age — возраст пользователя.// (подстановка template strings)*/

const user = {
  name: 'Фемистоклюс',
  age: 60
};

// Function declare
function convertObjToStr(user) {
  return `Привет, ${user.name}, Вам ${user.age} лет!`
}
const userStrData = convertObjToStr(user);
console.log(userStrData);

// Arrow function
const converObjToStrArrow = (user) => {
  `Привет, ${user.name}, Вам ${user.age} лет!`
};
console.log(converObjToStrArrow(user));