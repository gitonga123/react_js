//1. let and const
//Strict is mode to opt into a version of Javascript that fixes some mistakes
//in the language, turning them into errors.
'use strict'

//var makes a variable available globally
for(var i =0; i< 10; i++){
    console.log(i);
}

console.log(i);

console.log("End of Var");

//let makes a variable available wihin the scope of the block
//Block is defined at the start and of start of curly braces
for(let v = 0; v < 10; v++){
    console.log(v);
}

//console.log(v); //Uncaught ReferenceError: v is not defined

//const works simillary as the let only that once a variable is defined 
//can not be redefined. It is a read-only value

const person = 'Ryan';
const person = 'Kristen'; //Uncaught TypeError
console.log(person);

const person_hm = {
    name: "Ryan"
};

person_hm.name = 'Kristen';

console.log(person_hm);

Object.freeze(); ///use to lock an object down.
//output Uncaught SyntaxError: Identifier 'person_hm' has already been declared

//Let and const use to increase the perfomance.
//Since the browser knows the variable will or will not change
