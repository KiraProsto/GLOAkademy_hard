'strict';
// lesson02
const num = 266219;
const digits = num.toString().split('').map(Number);

let product = 1;
for (let i = 0; i < digits.length; i++) {
  product *= digits[i];
}

product = (product ** 3).toString();
console.log(product.substring(0, 2));

// через reduce
product = digits.reduce((acc, digit) => acc * digit, 1);
product = product = (product ** 3).toString();
console.log(product.substring(0, 2));
