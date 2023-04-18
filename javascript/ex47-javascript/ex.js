const printName = document.querySelectorAll(".form-input")[0];
const printSurname = document.querySelectorAll(".form-input")[1];
const printAge = document.querySelectorAll(".form-input")[2]

console.log(`${printName.previousElementSibling.innerText}${printName.value}
${printSurname.previousElementSibling.innerText}${printSurname.value}
${printAge.previousElementSibling.innerText}${printAge.value}`);