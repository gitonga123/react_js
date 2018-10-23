// All functions are objects, instances of the Function

console.log(id(5));

function id(x) {
  return x;
}

console.log(id(5));

console.log(id instanceof Function); // true
// Defining a function as an expression
var add = function (x, y) { return x + y };
console.log(add(2, 3)); // return 5

// Named function expressions
// the function is only accessible inside the function expression

var fac = function me(n) {
  if (n > 0) {
    return n * me(n-1);
  } else {
    return 1;
  }
};

console.log(fac(3));

// The Function Constructor
var add = new Function('x', 'y', 'return x + y'); // works similar to eval()

// Functions are hoisted completely.
// apply() useful whenever a function accepts multiple arguments in an array-like
// manner, but not an array.
console.log(Math.max(17, 33, 4, 18));
console.log(Math.max.apply(null, [17, 33, 88]));
