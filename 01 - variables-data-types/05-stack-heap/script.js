const firstName = 'Bolivar';
const age = 35;

//Reference values are stored on the heap
const person ={
  firstName : 'Tom',
  age: 50
}

let newName = firstName
newName = 'Elvis'
console.log(newName, firstName)

let newPerson = person
newPerson.firstName = 'Tonhão do cavaco'
console.log(person, newPerson)