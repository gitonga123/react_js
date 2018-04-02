//Arrays are used to store multimpe values in a single variable.
//Array can hold more than one value at a time

let cars = ["Saab","Volvo","BMW"];
console.log(typeof cars); //returns type object
//document.getElementById('demo').innerHTML = cars;

var x = cars.length;
var y = cars.sort();

console.log(x);
console.log(y);

//Adding array elemets
//use push

cars.push("Toyota");
cars[cars.length] = "Mazda";
//document.getElementById('demo').innerHTML = cars;

//associative arrays
//This are arrays with named indexes;
//JavaScript does not support arrays with named indexes;
//if you want to use arrays with string indexes you use objects

let person = {
	"name": "Daniel",
	"age" : 15
}

console.log(person.name);

console.log(typeof person);//both are objects
console.log(typeof cars);//both are objects
console.log(Array.isArray(person));
console.log(Array.isArray(cars));

function isArray(x){
	return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(cars));
console.log(cars instanceof Array);

//Javascript Array Methods
//toString converts array to comma separated string
//join convers all the array elements into a string 
//but in addition you can specify the separator
//Popping items out of an array
//pushing items into an array
//shift() equivalent to popping.
//shift method removes the first array element and shifts all other elements
//to a lower index
cars.pop();
console.log(cars);
cars.push("KIA");
console.log(cars);
console.log(cars.shift());
console.log(cars.unshift("VW"));
console.log(delete cars[0]); //deleteing an element given its index
//recommended to use pop or shift instead ///avoid holes

//splicing an array
//can be used to add new items to an array
//1st element where the element should be added
//2nd parameter how many elements should be removed
cars.splice(0,1, "Hyundai","Fiat");

cars.splice(0,1); //used to remove elements from an array

//Concatenating arrays
//concat() method creates a new array by merging existing arrays

let carGirls = ["Mercedes Benz","Bentley", "Toyota Prado"]; //dont mind the spelling
let myBoys = ["Land Rover", "Range Rover", "Jeep"];

//var favCars = carGirls.concat(myBoys);

//cars = cars.concat(favCars);

let favCars = cars.concat(myBoys,carGirls);

document.getElementById('demo').innerHTML = favCars.join(" - ");
//the slice method
//slices a piece of an array into a new array
let my_cars = cars.slice(0,3);
let my_car = cars.slice(1);
console.log(my_car);
console.log(my_cars);

//constructor returns an array's constructor function
console.log(cars.constructor.toString().indexOf("Array"));

//Array Prototype constructor
//This allows you to add new properties and methods to the 
//Array() object
//When constructing a property, ALL arrays will be given the property and
//its value as default
//when constructing a method, all arrays will have this method available

//Array,prototype does not refer to a single array, but to the array() object i self
//array.prototype is a global object constuctor which is available for all
//Javascript objects

//transform an arrays values into uppercase;

Array.prototype.myUcase = function() {
	for (let i = 0; i < this.length; i++){
		this[i] = this[i].toUpperCase();
	}
};


cars.myUcase();

console.log(cars);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
//The copyWithin() method copies array elements within the array, to and from specified positions.
//console.log(fruits.copyWithin(2, 0));
console.log(fruits.copyWithin(2,1));
console.log(fruits.entries());

//foreach method javascript
let sum = 0;
let numbers = [65,44,12,4];

function myFunction(item){
	sum += item;

	demo.innerHTML = sum;
}

//Array from() Method

let myArray = Array.from("ABCDEFGH");

console.log(myArray);

//the map() function
//creates a new array with the results of calling
//a function for a every array element
//Calls the provided function once for each element in an array,
//in order.

function multiplyArrayElement(num){
	return Math.pow(num,2);
}

function myFunction(){
	document.getElementById("demo").innerHTML = numbers.map(multiplyArrayElement);
}

let results = [];

results = numbers.map(multiplyArrayElement);
console.log(results);

console.log(fruits.sort());
console.log(fruits.reverse());
//using the Math.max.apply
function myArrayMax(arr){
	return Math.max.apply(null,arr);
}
console.log(myArrayMax(numbers));