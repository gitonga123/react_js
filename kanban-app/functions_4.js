// Immediately-invoked function expressions (IIFEs)
// allows you to define anonymous function and call it immediately without saving a reference.
let person = function (name) {
  return {
    getName: function () {
      return name;
    }
  }
}('Nicholas');

console.log(person.getName());

let person_1 = ((name) => {
  return {
    getName: function () {
      return name;
    }
  }
})('Daniel');

console.log(person_1.getName());