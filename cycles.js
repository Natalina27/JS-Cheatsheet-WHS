//for
console.log('==========for=========');

// В скобках цикла первым параметром объявляем итерируемую переменную,
// вторым – условие, пока которое верно, выполняется цикл,
// и третьим, что мы делаем в результате итерации.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('============================');
console.log('4-break');
for (let i = 0; i < 10; i++) {
    if (i === 4) {
        break; // Команда break прерывает цикл весь цикл целиком.
    }
    console.log(i);
}

console.log('============================');
console.log('4-continue');
for (let i = 0; i < 10; i++) {
    if (i === 4) {
        continue; // Команда continue прерывает цикл только на текущей итерации.
    }
    console.log(i);
}

//while
console.log('======while============');

let i = 0;

while (i < 10) { // Цикл будет происходить пока выполняется условие в скобках
    console.log(i);
    i++; // Увеличиваем наше значение на единицу каждый раз
}

//do while
console.log('======do while============');

 i = 0;

do {
    i++;
    console.log(i);
} while (i < 10); // Тоже самое что и while,
// только проверка на этот раз осуществляется после итерации цикла.
