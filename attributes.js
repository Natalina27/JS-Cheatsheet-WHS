const title = document.getElementById('title');
console.log('title for attributes: ', title);

let attrValue = title.getAttribute('name'); // Получает значение атрибута
console.log('getAttribute name = ' , attrValue);

let attrName = title.hasAttribute('name'); // Проверяет наличие атрибута
console.log('hasAttribute name ? :' , attrName);

title.setAttribute('name', 'new-name-title'); // Устанавливает новое значение атрибута

 attrValue = title.getAttribute('name'); // Получает значение атрибута
console.log('getAttribute name = ' , attrValue);

 attrName = title.hasAttribute('name'); // Проверяет наличие атрибута
console.log('hasAttribute name ? :' , attrName);

title.removeAttribute('name'); // Удаляет атрибут

 attrValue = title.getAttribute('name'); // Получает значение атрибута
console.log('getAttribute name = ' , attrValue);

 attrName = title.hasAttribute('name'); // Проверяет наличие атрибута
console.log('hasAttribute name ? :' , attrName);

title.setAttribute('href', '#');

// Атрибут href у ссылок можно получить двумя способами // Добавить ссылку
let link = title;

link.getAttribute('href');
link.href;

console.log(link.getAttribute('href'));
console.log(link.href);


