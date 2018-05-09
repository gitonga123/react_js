// Pass function as Parameters
let convertNum = function(num){
    return num + 10;
}

let processNum = function(num,fn){
    return fn(num);
}

console.log(processNum(10,convertNum));