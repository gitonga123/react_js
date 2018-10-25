// Unnamed Parameters in ECMAScript 5
function pick(object) {
  let result = Object.create(null);
  
  for (let i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] = object[arguments[i]];
  }

  return result;
}

let book = {
  title: "Understanding ECMAScript 6",
  author: "Nicholas C Zakas",
  year: 2015
};

let bookData = pick(book, "author", "year");

console.log(bookData.author);
console.log(bookData.year);