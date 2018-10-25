// Arrow functions in E6
var reflect = value => value;

var reflecting = function(value) {
  return value;
}

var reflection = () => value;
var sum = (num1, num2) => num1 + num2;

var sum = (...args) =>  args.map(x => x * 4);

const value = 'value';
console.log(reflect(value)); // return value
console.log(reflecting(value)); // return value
console.log(reflection(value)); // return value
console.log(sum(5, 4, 5)); //[20, 16, 20]