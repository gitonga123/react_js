// Array prototype map

var numbers = [3, 4, 5, 6];
var threeTimes = numbers.map(function (x) {
  return x * 3
});

console.log(threeTimes);