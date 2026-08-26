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
