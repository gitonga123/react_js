//3. Arrow Functions
//arrow functions are the new systax for createing functions in ES2015
///Instead of using the key word function
//we use => or fat arrow
//CANNOT be called with new. they dont have a construct
//No prototype
//cannot change the value of this

//Arror function Syntax
let reflect = value => value;
//equivalet to
let reflect = function(value){
    return value;
}
//passing more than one argument, you must include the parantheses
let sum = (a,b) => a + b;

//equivalet too
let sum = function (a,b) {
    return a + b;
}
//if no arguments simply added an empty parentheses
let getName = () => "Daniel";
let getName = function(){
    return "Daniel";
}

//if a function consists of more than one expresssion
//curly braces my be used

const add = (a,b) => {
    return a + b;
};

console.log(add(2,3));
 //function that does nothing
let doNothing = () => {};
//if the function had one parameter then you
//leave the () part

const add5 = a => a + 5;

const add_5 = () => 3+5;

const add_51 = _ => 3+5;
console.log(add5(3));

//Arrow functions and functional programming
//function with arrow programming
const numbers = [3,4,5,6,7,8];
const doubleNumbers = numbers.map(function (n) {
    return n* 2;
});

console.log(doubleNumbers);

//function with arrow functions
//simple and clean. :>)

const number = [3,4,5,6,7,8];

const doubleNumber = numbers.map(n => n *2);

console.log(doubleNumber);


//an arrow function that wants to return a Object literal outside
//a function body must wrap the literal in parentheses

let getTempItem = id => ({id: id, name: "Temp"});

//creating immediately invoked function expressions
//IIFEs
//They allow you to define an anonymous function and call it
//immediately without saving a reference
let person = function(name){
    return {
        getName: function() {
            return name;
        }
    }
}("Daniel");

console.log(person.getName());

//using arrow functions

let person = ((name) => {
    return {
        getName: function(){
            return name;
        }
    }
})("Daniel");