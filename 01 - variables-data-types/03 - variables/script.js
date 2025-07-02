// ways to declare a variable are:
// let, const, var

// var is a long scope
// let and const, are short scope

let firstname =  'Bolivar';
let lastname = 'Mardega'

console.log(firstname, lastname, age)

var age = 40;

console.log(age)

//naming conventions:
// only letter , numbers, underscore and dollar signs
// Can't start with number

// Mult-word formatting;

// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables

age = 30

console.log(age)

let score = 10

console.log(score)

if (true){
  score = score + 1
}

console.log(score)

//CONST.. can't be re-assigning directly:

const x = 10;

// x = 20; isn't works. We have to use a let to do this

const arr = [1,3,5,6,7];
arr.push(11,12,13)
console.log(arr)


const person = {
  'nome' : 'Belinha'
}

person.nome = 'Belão'

console.log(person)

// Declare multiple values at once
let a = 'copinho', b, c
const t = 1, p = 0, y = 'eu'
console.log(a)