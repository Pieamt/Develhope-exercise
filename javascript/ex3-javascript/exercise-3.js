const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide =  (a, b) => {
  return  a / b;
}

let firstSum = sum(2, 4);

let secondSum = sum(2, 5);

let firstMultiply = multiply(firstSum, secondSum);

let firstSubtract = subtract(firstMultiply, 2);

let firstDivide = divide(firstSubtract, 5);


const log = function (value) {
  value = firstDivide;
  console.log(value);
}

log();
