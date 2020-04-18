//classList

const title = document.getElementById('title');
console.log('title : ', title);


title.classList.contains('main-title'); // Проверка, содержит ли элемент данный класс
console.log('title.classList.contains(\'main-title\') : ', title.classList.contains('main-title'));

title.classList.add('main-title_red'); // Добавляет класс
console.log('title.classList.add(\'main-title_red\') : ', title.classList.add('main-title_red'));

title.classList.remove('main-title_red'); // Удаляет класс
console.log('title.classList.remove(\'main-title_red\') : ', title.classList.remove('main-title_red'));

title.classList.toggle('main-title_red'); // Переключает класс
console.log('title.classList.toggle(\'main-title_red\') : ', title.classList.toggle('main-title_red'));

console.log('title : ', title);