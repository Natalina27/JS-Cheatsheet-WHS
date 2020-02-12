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