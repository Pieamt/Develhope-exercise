class Person {
  _firstName;
  _lastName;
  _age;
  
  constructor (firstName, lastName, age) {
    this._firstName= firstName;
    this._lastName= lastName;
    this._age= age;
  }

 set firstName(value) {
  if (value === "string") {
    this._firstName = value;
  } else {
    console.log("not a string");
  }
 }

 get firstName() {
  return this._firstName
 }

 set lastName(newValue) {
  if (newValue === "string") {
    this._lastName = value;
  } else {
    console.log("not a string");
  }
 }

 get lastName() {
  return this._lastName
 }

 set age(newNumber) {
  if (newNumber < 1) {
    this._age = 1;
  } else if (newNumber > 110){
    this._age = 110;
  } else {
    this._age= newNumber;
  }
 }

 get age() {
  return this._age
 }

 get fullName() {
  return this._firstName + " " + this._lastName + " " + this._age;
 }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person._firstName = 'Maria';
person._lastName = 'Verdi';
console.log(person.fullName);