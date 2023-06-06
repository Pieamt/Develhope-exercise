let crypto = require("crypto")

function randomValue(length) {
  return crypto.randomBytes(Math.ceil(length)).toString("hex").slice(0,length);
  
};

let randomId = randomValue(5);
console.log(randomId);