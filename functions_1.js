//ECMAScript 5
function makeRequest(url,timeout, callback){
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback: function(){
        return 5 + 6;
    };

    console.log(timeout);
    console.log(callback);
    console.log(url);
}


makeRequest("www.goog.come");

//ECMAScript 6

function makeRequest2(url, timeout = 2000,callback= function(){}) {

    console.log(typeof undefined);
    console.log(typeof null);
}

makeRequest2("/google.com");

function getValue(){
    return 5;
}
//Default Parameter Expressions can be used to 
//pass complex Data values as parameters to a funciton

function add(first,second = getValue()){
    return first + second;
}

function add1(first,second=first){
    return first + second;
}

console.log(add(3,6));
console.log(add(5));
console.log(add1(5));
console.log(add1(5,6));

//The call to add1(undefined, 1) will trhough an error

