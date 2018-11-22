// callback examples
// map() function

var array = [1,2,3,4,5,6];
var newArray = array.map(function(x){
	return x * x;
});

console.log(newArray);

function isEven(x) {
	return x % 2 == 0;
}

var newArrays = array.filter(isEven);

console.log(newArrays);