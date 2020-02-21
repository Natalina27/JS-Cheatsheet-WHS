//for..of loop
const titles = document.querySelectorAll('.active');
console.log(titles );

for (let item of titles) {
    console.log(item);
    item.style.color = 'red';
}

//hidden
const mainTitle = document.querySelector('.main-title');
mainTitle.hidden = true; // Скрывает элемент

//infoAboutElement
const title = document.getElementById('title');
const id = title.id;
const type = title.type;
const value = title.value;
console.log(id, type, value); // title, undefined, undefined

//innerHTML
const container = document.querySelector('.container');
title.innerHTML = 'Это новый заголовок!'; // Добавляем внутрь нашего заголовка новый текст
container.innerHTML = '<p>Это абзац<ul><li>1</li><li>2</li><li>3</li></ul></p>'; // Добавляет внутрь body новую разметку

//outerHTML

console.log(container.outerHTML); // outerHTML свойство возвращающее всю разметку внутри элемента

//textContent
title.textContent = 'Новый заголовок!'; // Добавляет только текст
