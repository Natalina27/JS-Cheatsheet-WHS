//body
const body = document.body; // Обращаемся к body
console.log('body = ', body);


//children

const children = document.body.childNodes; // childNodes хранит все дочернии элементы, включая текст

firstChild = children[0];

firstChild = document.body.firstChild; // Обращение к первому элементу

let lastChild = document.body.lastChild; // Обращение к последнему элементу
console.log('children = ', children);
console.log('firstChild = ', firstChild);
console.log('lastChild = ', lastChild);

//closest
let title1 = document.getElementById('title');

const wrap = title1.closest('.wrap'); // Ищет выше по ирархии указанный элемент
console.log(title1);
console.log(wrap);

