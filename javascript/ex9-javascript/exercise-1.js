const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys 

for (const keys of Object.keys(person)) {
  console.log(keys+":"+person[keys]);
};