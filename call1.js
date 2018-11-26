function mult(x, y) {
	return x * y;
}

function add(x, y) {
	return x + y;
}

function calculate(x, y, compute) {
	return compute(x, y);
}

var a = calculate(10, 5, add);
console.log(a);

var b = calculate(10, 5, mult);
console.log(b);

var d = calculate(10, 5, function(x,y) {
	return x - y;
});

console.log(d);

var e = calculate(10, 5, (x, y) => {return x + y});
console.log(e);
