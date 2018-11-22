// callback functions are functions that are passed
// as arguments into other functions to be executed
// at a later point in time
function mult(x, y) {
	return x * y;
}

function add(x, y) {
	return x + y;
}

function calculate(x, y, compute) {
	return compute(x, y);
}

let b = 10, a = 5;
var adding = calculate(a, b, add);
console.log(adding);
var multi = calculate(a, b, mult);
console.log(multi);

// anynomous function
var c = calculate(a, b, function(a, b) {
	return b - a;
});

// arrow functions
var d = calculate(a, b, (a, b) => {return a - b});
console.log(d);


console.log(c);