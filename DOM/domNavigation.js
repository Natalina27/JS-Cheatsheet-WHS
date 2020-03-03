//body
const body = document.body; // Обращаемся к body
console.log(body);


//children

const children = document.body.childNodes; // childNodes хранит все дочернии элементы, включая текст

let firstChild = children[0];

firstChild = document.body.firstChild; // Обращение к первому элементу

let lastChild = document.body.lastChild; // Обращение к последнему элементу
console.log('children = ', children);
console.log('firstChild = ', firstChild);
console.log('lastChild = ', lastChild);
