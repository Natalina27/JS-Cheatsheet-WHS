const title = document.getElementById('title');
console.log('title for attributes: ', title);

let attrName = title.hasAttribute('name'); // Проверяет наличие атрибута
console.log('hasAttribute name ? :' , attrName);

let attrValue = title.getAttribute('name'); // Получает значение атрибута
console.log('getAttribute name = ' , attrValue);