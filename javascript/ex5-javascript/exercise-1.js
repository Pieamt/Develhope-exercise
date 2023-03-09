const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// const person2 = {};

// for (const value in person1) {
//   person2[value]= person1[value]
// }

person2.firstName = "Simon";


console.log(person1);
console.log(person2);

// in questo modo verrebbero modificati entrambi gli oggetti perchè
// stiamo mettendo p2=p1 quindi non stiamo facendo una copia dell'oggetto.
// nel modo commentato invece si riesce a cambiare solo il nome di p2 lasciando invariato p1