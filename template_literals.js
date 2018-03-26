//ES2015 a new way to define a string.
//2. Template Literals

//var jquery = require('jquery');
let name = "Daniel";
let job = "Software Developer";

//string concatenation

let sentence = name + " is a " + job;

console.log(sentence);

//Templete Literal String you use ` (Backtick)
//Concatenation is to be very easy
//${Template Place Holder}
//can be used in Multi line
let names = `Mutwiri`;
let jobs = `Software Engineer`;

let sentence_2 = `${names} is a ${jobs}`;

console.log(sentence_2);

const multi = `This is a 
multiline string`;
console.log(multi);

//Example

const person = {
    name: "Daniel",
    job: "Developer"
};

const markup = `
<div>
    <h1>${person.name}</h1>
    <h2>${person.job}</h3>
</div>`;


document.writeln(markup);
