//lesson04
'use strict';
let argument = prompt('Что-то введите:');

function formatString(arg) {
  if (typeof arg !== 'string') {
    return 'Это не строка';
  }

  arg = arg.trim();
  if (arg.length > 30) {
    return arg.substring(0, 30) + '...';
  }

  return arg;
}

console.log(formatString(argument));
