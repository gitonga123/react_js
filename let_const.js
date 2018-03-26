//Strict is mode to opt into a version of Javascript that fixes some mistakes
//in the language, turning them into errors.
'use strict'

//var makes a variable available globally
for(var i =0; i< 10; i++){
    console.log(i);
}

console.log(i);

console.log("End of Var");

//let makes a variable available locally
for(let v = 0; v < 10; v++){
    console.log(v);
}

console.log(v);