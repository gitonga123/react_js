//3. Arrow Functions
//arrow functions are the new systax for createing functions in ES2015
///Instead of using the key word function
//we use => or fat arrow

const add = (a,b) => {
    return a + b;
};

console.log(add(2,3));

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