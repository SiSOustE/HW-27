// функция, которая принимает массив символов, а возвращает слова

// Вариант I

/*let semantics // осмысленный набор символов - слова
function getWords (setOfSimbols) {
semantics = setOfSimbols.join('');
  return semantics;
}
getWords(['с', 'а', 'м', 'ы', 'х', ' ', 'ч', 'е', 'с', 'т', 'н', 'ы', 'х', ' ', 'п', 'р', 'а', 'в', 'и', 'л']);
console.log(semantics);*/

// ------------------------------------
// Вариант II

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

// ------------------------------------
// Вариант III

let quote
function getQuote(word1, word2, word3) {
  quote = (['"'].concat(word1).concat([' ']).concat(word2).concat([' ']).concat(word3).concat([`\"`])).join('');
  return quote
}

getQuote(['с', 'а', 'м', 'ы', 'х'], ['ч', 'е', 'с', 'т', 'н', 'ы', 'х'], ['п', 'р', 'а', 'в', 'и', 'л']);
console.log(quote);