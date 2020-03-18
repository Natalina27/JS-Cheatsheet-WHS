const dish = ['pasta', 'risotto', 'polenta','tomato soup','tomato soup','tomato soup'];
console.log(dish);

dish.pop(); // Команда pop удаляет последний элемент из массива.
console.log('pop' , dish);

dish.push('pen'); // Добавляет элемент в конец массива.
console.log('push' , dish);


dish.shift(); // Команда shift удаляет первый элемент из массива.
console.log('shift' , dish);

dish.unshift('car'); // Добавляет элемент к начало массива.
console.log('unshift' , dish);

const  favouriteDish = dish.filter(el => el === 'tomato soup'); // условие, которое должно выполниться, чтобы елемент попал в новый массив
console.log(favouriteDish);
