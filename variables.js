// поменять местами значения 2х переменных не используя 3ю

let a = 7;
let b = 11;

b = [ a, a = b][0];

console.log('a = ', a);//11
console.log('b = ', b);//7
