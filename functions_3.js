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

