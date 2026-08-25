'strict';
// lesson02
// const num = 266219;
// const digits = num.toString().split('').map(Number);

// let product = 1;
// for (let i = 0; i < digits.length; i++) {
//   product *= digits[i];
// }

// product = (product ** 3).toString();
// console.log(product.substring(0, 2));

//через reduce
// product = digits.reduce((acc, digit) => acc * digit, 1);
// product = product = (product ** 3).toString();
// console.log(product.substring(0, 2));

// lesson03
const ru_week =
  'Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье';

const en_week =
  'Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday';

const lang = prompt('ru или en?').toLowerCase();

if (lang === 'ru') {
  console.log(ru_week);
} else if (lang === 'en') {
  console.log(en_week);
} else {
  console.log('введите правильное значение');
}

switch (lang) {
  case 'ru':
    console.log(ru_week);
    break;
  case 'en':
    console.log(en_week);
    break;
  default:
    console.log('введите правильное значение');
    break;
}

const weeks = {
  ru: ru_week,
  en: en_week,
};

weeks[lang] !== undefined
  ? console.log(weeks[lang])
  : console.log('введите правильное значение');

const namePerson = prompt('Введите имя: ');
namePerson === 'Артем'
  ? console.log('директор')
  : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент');
