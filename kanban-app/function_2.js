// Unnamed Parameters in ECMAScript 5
function pick (object) {
  let result = Object.create(null);

  for (let i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] = object[arguments[i]];
  }

  return result;
}

let book = {
  title: 'Understanding ECMAScript 6',
  author: 'Nicholas C Zakas',
  year: 2015
};

let bookData = pick(book, 'author', 'year');
console.log(bookData);
console.log(bookData.author);
console.log(bookData.year);

// ECMAScript 6 Uses Rest Parameters (...)

function pickImproved (object, ...keys) {
  let result = Object.create(null);

  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]];
  }

  return result;
}

let bookData1 = pickImproved(book, 'author', 'year');
console.log(bookData1);
console.log(bookData1.author);
console.log(bookData1.year);

function sum (...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
// only the last parameter can be prefixed with ...

function myFun (a, b, ...AllArgs) {
  console.log('a: ', a);
  console.log('b: ', b);
  console.log('many more args: ', AllArgs);
}

myFun('one', 'two', 'three', 'four', 'five', 'six');