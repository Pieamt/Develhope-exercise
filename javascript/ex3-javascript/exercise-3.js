const a = 2;
const b = 4;
const c = 5;

// const sum = (a, b) => {
//   return a + b;
// }

// const subtract = (a, b) => {
//   return a - b;
// }

// const multiply = (a, b) => {
//   return a * b;
// }

// const divide =  (a, b) => {
//   return  a / b;
// }


const log = (a, b, c) => {
  
  value = ((a + b) * (a + c) - a ) / c;
  return value;
}

console.log(log(a, b, c))
