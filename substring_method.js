//Method for Identifying Substrings
//includes() returns true if string found anywhere
//startsWith() returns true if found at the beginning of the string
//endsWith(); //returns true if found at the end of the string
//endsWith() -> starts the march from the length of he string minus
//the second argument
let msg = "Hello World!";

console.log(typeof msg);
console.log(msg.startsWith("Hello")); //true
console.log(msg.endsWith("!"));//true
console.log(msg.includes("o"));//true

console.log(msg.startsWith("o"));//false
console.log(msg.endsWith("World!"));//true
console.log(msg.includes("x"));//false

console.log(msg.startsWith("o",4));//true
console.log(msg.endsWith("o",8));//true
console.log(msg.includes("o",8));//false

console.log(msg.length);
console.log(msg.charAt(8));