//Javascript Data types
//5 different data types string, number, boolean, object,function
//Object,Date,Array
//null,undefined
//typeof operator to find the data type of JavaScript variable
//But, the typeof operator always returns a string (containing the type of operand)

let number = 1;
let arrays = [1,2,3,4,5];
console.log(typeof number);
console.log(typeof arrays);

//The constructor Property
//returns the constructor function for all JavaScript variables
console.log(function(){}.constructor);
console.log(number.constructor);

//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(number));

let x = 5 && 1;

console.log(x);