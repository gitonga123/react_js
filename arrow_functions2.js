//The value of this can change inside a single functions
//depending on the context in which the function is called

let pageHandler = {
    id: 12345,

    init: function(){
        document.addEventListener("click",function(event) {
            this.doSomething(event.type);
        },false);
    },
    doSomething: function(type){
        console.log("Handling " + type + " for " + this.id);
    }
}

//the above function -> the call to this.doSomething is broken
//because this is a reference to the object that was the target
//of the event instead of being boung to PageHandler
//this can be fixed by binding the value of this to PageHandler
//explicitly using the bind9) method on the function instead

let PageHandler = {
    id: 12345,
    init: function(){
        document.addEventListener("click",function(event){
            this.doSomething(event.type);
        }).bind(this).false;
    },
    doSomething: function(type){
        console.log("Handling " + type + " for " + this.id);
    }
}

//By calling the bind(this), you're actually creating a new function
//whose this is bound to the current this, which PageHandler. 
//To avoid creating an extra function, a better way to fix this code
//is to use an arrow function

let PageHandler = {
    id: "123456",
    init: function(){
        document.addEventListener("click",event=>this.doSomething(event.type),false);
    },
    doSomething: function (type) {
        console.log("Handling " + type + " for " + this.id);
    }
};

//Arrow functions and Array
let result = values.sort(function(a,b){
    return a - b;
});

//using arrow funtions

var result = values.sort((a,b) => a - b);