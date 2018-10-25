// Default Parameter Values in ECMAScript 6
function makeRequest(url, timeout = 2000, callback = function (){}) {
  let url_1 = url || 'wwww.google.com';
  console.log(typeof url_1);
  console.log(typeof callback);
  console.log(typeof timeout)
}

makeRequest();
console.log(url_1); // throws an error, TDZ
// Default Parameter Expressions
function getValue() {
  return 5;
}

function add(first, second = getValue()) {
  return first + second;
}

console.log(add(1, 1)); // 2
console.log(add(1)); // 6