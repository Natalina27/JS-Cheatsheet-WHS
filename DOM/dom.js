//for..of loop 
const titles = document.querySelectorAll('.main-title');
console.log(titles );


for (let item of titles) {
    console.log(item);
    item.style.color = 'red';
}

//hidden
let title = document.getElementById('title');

//title.hidden = true; // Скрывает элемент

//infoAboutElement
const id = title.id;
const type = title.type;
const value = title.value;
console.log(id, type, value); // title, undefined, undefined

//innerHTML
title = document.getElementById('title');
title.innerHTML = 'Это новый заголовок!'; // Добавляем внутрь нашего заголовка новый текст
document.body.innerHTML = '<p>Это абзац<ul><li>1</li><li>2</li><li>3</li></ul></p>'; // Добавляет внутрь body новую разметку