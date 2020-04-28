//for

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