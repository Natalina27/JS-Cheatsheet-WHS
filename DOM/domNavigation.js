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

//getElementById
 const title2 = document.getElementById('title');
 console.log('title2',title2);

 //matches
let isMainTitle = title.matches('.main-title._active');// Проверяем соответсвует ли текущий элемент данному селектору
console.log('isMainTitle === .main-title._active', isMainTitle);

//querySelector
const title3 = document.querySelector(  '#title', '.main-title' );
// Ищет элемент соответствующий данному селектору и возвращает первый попавшийся
console.log('title3',title3);


//querySelectorAll
const titles1 = document.querySelectorAll('#title , .main-title');
// Ищем все элементы соответствующие данному селектору
console.log('titles1', titles1);




