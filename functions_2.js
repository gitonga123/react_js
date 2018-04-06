//JS functions are defined with the function keyword
//you can use function declaration or a function expression
//1. the keyword
function functionName(params) {
    return params;
}

//anonymous function(functions without a name)
let x = function(a,b){return a * b };

let z = x(4,3);

console.log(z);

//can be defined new function

var x_func = new Function("a","b", "return a * b ");

var z_func = x_func(4,3);

console.log(z_func);

//self-invoking functions
//A self-invoking expression is invoked (started) automatically,
// without being called.
//Function expressions will execute automatically 
//if the expression is followed by().
