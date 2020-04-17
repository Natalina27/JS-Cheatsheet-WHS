const isOpen = false; // Boolean (Булевые) могут принимать

const isFree = true;

const number = 7;

const string = '';

isFree && isOpen;   // И – Возвращает true, когда обе части возвращают true,
console.log('isFree && isOpen: ', isFree && isOpen);
// false когда хотя бы одна из частей возвращает false



isOpen || isFree; // ИЛИ - Возвращает true, когда хотя бы одна из частей возвращает true.
console.log('isOpen || isFree: ', isOpen || isFree);


!isFree; // НЕ - измение значение на противоположное.
console.log('!isFree ', !isFree);


!!number; // Возвращает boolean true
console.log('!!number: ', !!number);


!!string; // false
console.log('!!string: ', !!string);

