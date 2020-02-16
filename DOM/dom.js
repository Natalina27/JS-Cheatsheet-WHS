//for..of loop 
const titles = document.querySelectorAll('.main-title');
console.log(titles );


for (let item of titles) {
    console.log(item);
    item.style.color = 'red';
}

//hidden
const title = document.getElementById('title');

title.hidden = true; // Скрывает элемент

//infoAboutElement
const id = title.id;
const type = title.type;
const value = title.value;
console.log(id, type, value); // title, undefined, undefined