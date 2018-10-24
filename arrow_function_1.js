// Array prototype map

var numbers = [3, 4, 5, 6];
var threeTimes = numbers.map(function (x) {
  return x * 3
});

console.log(threeTimes);

// ES6
var threeTimez = numbers.map((x) => {
  return x *3;
})

console.log(threeTimez);

var threeTime = numbers.map(x => {
  return x *3;
});

console.log(threeTime);

var threeTim = numbers.map( x => x * 3 );
console.log(threeTim);