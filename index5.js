'use strict';

//Z1
let input = prompt('Введите число:');

const isNum = function (num) {
  if (num === null) {
    return false;
  }

  num = num.trim();

  if (num === '') {
    return false;
  }

  return !isNaN(num) && isFinite(num);
};

if (isNum(input)) {
  input = Number(input.trim());
  console.log('Вы ввели число:', input, 'Тип:', typeof input);
} else {
  console.log('Введено не число или нажата отмена');
}

//Z2
let arr = ['123456', '2345678', '345678', '456789', '67890', '98765', '87654'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }
}

//Z2
for (let n = 2; n <= 100; n++) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(n);
    console.log(`Делители этого числа: 1 и ${n}`);
  }
}
