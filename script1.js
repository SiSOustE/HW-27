// функция, которая принимает массив символов, а возвращает слова

let semantics // осмысленный набор символов - слова

function getWords (setOfSimbols) {
semantics = setOfSimbols.join('');
  return semantics;
}

getWords(['с', 'а', 'м', 'ы', 'х', ' ', 'ч', 'е', 'с', 'т', 'н', 'ы', 'х', ' ', 'п', 'р', 'а', 'в', 'и', 'л']);
console.log(semantics);