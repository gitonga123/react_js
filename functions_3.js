//function parameters are the names listed in the function defintion
//function arguments are the real value passed to (and received by) the function
//js functions do no check the number of arguments received

//if the function is called with missing arguments, then missing 
//values are set to: undefined
//Arguments object
//in built oject called the arguments object
//that contains an array of arguments used when the function was called

 function findMax(){
 	let i;
 	let max = -Infinity;

 	for(i = 0; i < arguments.length; i++){
 		if(arguments[i] > max){
 			max = arguments[i];
 		}
 	}

 	return max;
 }
let x = findMax(1,123,500,115,44,88);

 console.log(x);

 //using EMCAScrpt 6
 function sumAll(){
 	let i,sum =0;
 	for(i =0; i < arguments.length; i++){
 		sum += arguments[i];
 	}

 	return sum;
 }
let sum = sumAll(1,123,500,115,44,88);

console.log(sum);

//arguments are passed by value
//changes to arguments are not visible outside the function
//Objects are passed by reference
//because object refrences are values
//if a function changes an object property
//it changes the original value
//changes to object properties are visible (reflected) outside the function

//Invoking a Javascript function
//calling a function

function myFunction(a,b){
	return a * b;
}

window.myFunction(10,2);

//in a browser the function becomes the window function

//the global object
//in the browser the global object is the browser window.

//invoking a function as a method

let myObject = {
	firstName: "John",
	lastName: "Doe",
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
}

myObject.fullName();

//This key is the object that owns the JavaScript Code


//Invoking a Function with a Function Constructor
//function invocation is preced with the new Keyword

function myFunction(arg1,arg2){
	this.firstName = arg1;
	this.lastName = arg2;
}

//this creates a new object

let mx = new myFunction("John", "Doe");

mx.firstName;

//constructor invocation creates a new object. the new object 
//inherits the properties and methods from its constructor.
//The value of this will be the new object created when the function is invoked.
