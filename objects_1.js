'use strict';
var jane = {
  name: 'Jane',
  describe: function () {
    return 'Person Named ' + this.name;
  }
};
console.log(jane.name);
jane.name = 'John';
console.log(jane.name);
console.log(jane.describe());
