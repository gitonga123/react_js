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

// string prorotype methods
console.log('abc'.slice(1, 2));
var string_1 = 'a, b, c,d'.split(',');
console.log(string_1);
console.log(string_1.join(','));
var string_2 = ' go home ';
console.log(string_2);
console.log(string_2.trim());
console.log(string_1.concat(' , ', string_2, '.'));
console.log('JOHN'.toLowerCase());
console.log(string_2.toUpperCase());

// string search and compare
// index of starts searching from position 1
console.log('abcd'.indexOf('c'));
console.log('abcda'.indexOf('a'));
// last index of starts search from position end
console.log('abcda'.lastIndexOf('a'));

// locale Compare performs a locale-senstive comparing of the string with other.
// < 0 if the string comes before other
// = 0 if the string is equivalent to other
// > 0 if the string comes after other.
console.log('apple'.localeCompare('banana'));
console.log('appple'.localeCompare('apple'));