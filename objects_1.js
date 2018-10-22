'use strict';
var jane = {
  name: 'Jane',
  describe: function () {
    return 'Person Named ' + this.name;
  }
};

eval('jane');

console.log(jane.name);
jane.name = 'John';
console.log(jane.name);
console.log(jane.describe());

// Math.floor()
// converts its argument to the closest lower integer
let number_1 = 3.2;
console.log(number_1);
// Math Floor function
console.log(Math.floor(number_1));

// Math Ceil converts its argument to the closest higher integer
console.log(Math.ceil(number_1));

// Math Round converts its argument ot the closet integer
console.log(Math.round(number_1));