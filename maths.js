//The Math Function Java script
let X = 154.67;
let array_x = [1,2,3,4,5,19];
console.log(Math.PI); //returns the PI
console.log(Math.round(4.7)); //returns number rounded to its nearest integer
console.log(Math.pow(8,3)); //returns the power 
console.log(Math.sqrt(64)) ; //returns the square root
console.log(Math.abs(-4.7)); //returns the absolute(positive) value of X
console.log(Math.ceil(4.4)); //returns the value of rounded up to its nearest integer
console.log(Math.floor(4.7)); //returns the value rounder down to its nearest integer
console.log(Math.sin(60 * Math.PI/180)); //returns sine 60
console.log(Math.min(0,150,30,20,-8,-200))//returns the lowerst value
console.log(Math.max(0,160,20,2890));//returns the max value
console.log(Math.random()); //returns a random number
console.log(Math.LOG10E); //returns the base -10 log of E
console.log(Math.LN10);
console.log(Math.trunc(X)); //returns the integer part of a number
console.log(Math.max(array_x)); //Error ECMAScript solves this using the spread operator
console.log(Math.max(...array_x));
console.log(Math.min(...array_x));
//use the random class

function getRndInteger(min,max){
	return Math.floor(Math.random() * (max - min )) + min;
}

function gerRoundInteger(min,max){
	return Math.floor(Math.random() * (max - min +1 )) + min;
}


console.log(getRndInteger(15,90));
console.log(gerRoundInteger(15,90));