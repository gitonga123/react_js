//The Rest Parameters
//This allows use to gather the parameters
//passed to our functions
//example we had a function that takes a number of
//arguments and returns the sum
//like sum => add (2,3,4,5,6,7) to return 27 

const add = function() {
    const numbers = Array.prototype.slice.call(arguments);
    return numbers.reduce((a,b) => a + b);
};

console.log(add(2,3,4,5,6,7));

//arguments is an Array-LIKE object, meaning it is not an actual array but, 
//is a collection of the arguments passed to a function

//Doing it the Rest Parameters!

const adding = function(...number){
    return number.reduce((a,b) => a+ b);
};

console.log(adding(2,3,4,5,6,7));

const multi = (multiplier, ...numberz) => {
    return numberz.map(n => n * multiplier);
}

let numbering = (2, 3);
console.log(multi(10, numbering)); // 30 the last index