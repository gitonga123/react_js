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
document.getElementById('demo').innerHTML = cars;

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

