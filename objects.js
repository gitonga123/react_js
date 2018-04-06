//In JavaScript almost everything is an object
//A Primitive value is a value that has no properties or methods
//A Primitive data type is data that has a primitive value
//string
//number
//boolean
//null
//undefined

//Objects are variables containing variables
//JavaScript object is a collection of named values
//Object Methods -> actions that can be performed on objects
//it contains a function definition

//creating an object
//1. Using an Object Literal

let person = {firstName: "John",lastName: "Doe", age: 50, eyeColor: "blue"};

//using the new JavaScript keyword

let persons = new Object();

persons.firstName = "John";
persons.lastName = "Doe";
persons.eyeColor = "Red";
persons.age = 50;
let x = persons;
x.age = 10;


console.log(persons);

//Preferable the first method
//Objects are mutable -> Liable to Change
//Addressed by reference, not by value
//object x is not a copy of persons. Both x and Persons are the same 
//object
//JS Variables are not mutable. Only JavaScript objects are

console.log(x);

//Objects in for loop

for(k in persons){
    console.log(persons[k]);
}


//deleting properties
delete persons.age;

console.log(persons);

//The this keyword
//The object that owns the javascript code.
//the value of this, when used in a function, is the object that owns the functions

let personss = {
    firstName: "John", 
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    } 
}

console.log(personss.fullname);
console.log(personss.fullname());
