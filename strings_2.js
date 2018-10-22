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
console.log('abc'.charAt(1)); //b
console.log('abc'[1]); //b

// to string conversion
let hi = 123;

console.log(typeof hi);
console.log(typeof hi.toString());
console.log(typeof String(hi));
let hi_2 = '123';
console.log(typeof hi_2);

// string concatenation
var str_2 = '';
str_2 += 'Say Hello ';
str_2 += 7;
str_2 += ' times fast!';
console.log(str_2);

var arr = [];
arr.push('Say hello ');
arr.push(7);
arr.push(' times faster');

arr.join('');
console.log(arr);