function sumUntil(maxValue) {
  let output = 0;
  for (let i = 0; i <= maxValue; i++) {
  output = output + i
  }
  return output
}

console.log(sumUntil(5));

