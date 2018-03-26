'use strict'
//For example Math.Max Function

const numbers = [39,25,90,123];

const max_number = Math.max(numbers);

console.log(max_number); //Output undefined // NaN

//Math.Max is a method that takes a comma separated list of values 
//and will return the highest.
//There is a way to get around through this, we can use a method called .apply
//that takes an array and calls a function as if we had passed them in as a list

const numberss = [39,65,78,90,12];
const maximum = Math.max.apply(null, numberss);
console.log(maximum);//output 90

//This can be resolved by using the Spread Operator
const numberz = [39,25,90,123];
const max = Math.max(...numbers);

console.log(max);

//can be used to cancatinate the arrays together

//In conclusion the spread operator allows us to pass an array of 
//arguments into a function
