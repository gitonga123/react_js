// Strings are immutable sequneces of JavaScript characters
// Both single and double quotes are used to delimit string literals
// Escaping in String Literals
// Line continuations
let str = 'Written \
over \
multiple \
lines';

console.log(str === 'Written over multiple lines'); // true

let str2 = 'Written ' +
           'over ' +
           'multiple ' +
           'lines';
console.log(str2 === 'Written over multiple lines'); // true
// Character Access
console.log('abc'.charAt(1)); // b
console.log('abc'[1]); // b