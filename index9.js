'use strict';

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

function declOfNum(num, one, two, five) {
  if (num === 1) return one;
  if (num >= 2 && num <= 4) return two;
  return five;
}

function addZero(num) {
  return num < 10 ? '0' + num : num;
}

//Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды
// 04.02.2020 - 21:05:33
function getData() {
  const date = new Date();

  const dayWeek = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hour = date.getHours();
  const minut = date.getMinutes();
  const second = date.getSeconds();

  document.body.innerHTML = `
  <p>
    Сегодня ${dayWeek}, ${day} ${month} ${year} года,
    ${hour} ${declOfNum(hour, 'час', 'часа', 'часов')}
    ${minut} ${declOfNum(minut, 'минута', 'минуты', 'минут')}
    ${second} ${declOfNum(second, 'секунда', 'секунды', 'секунд')} 
  </p>

  <p> 
    ${addZero(day)}.${addZero(date.getMonth() + 1)}.${year} 
    - 
    ${addZero(hour)}:${addZero(minut)}:${addZero(second)}
  </p>
  `;
}

getData();
setInterval(getData, 1000);
