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
