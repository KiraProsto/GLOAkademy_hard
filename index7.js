const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
const today = new Date().getDay();

week.forEach((day, index) => {
  let output = day;
  let style = '';

  if (index === 5 || index === 6) {
    output = `<i>${output}</i>`;
    style += 'font-style: italic;';
  }

  if (index === (today === 0 ? 6 : today - 1)) {
    output = `<b>${output}</b>`;
    style += 'font-weight: bold;';
  }

  document.write(output + '<br>');
  console.log('%c' + day, style);
});
