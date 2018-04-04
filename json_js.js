//JSON format for storing and transporting data
//JSON = JavaScript Object Notation
// /ritten as name/value pairs, object properties

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects:
//convert a JavaScript object into a string JSON.stringify().

let text_obj = JSON.parse(text);

console.log(text_obj);

document.getElementById("demo").innerHTML = text_obj.employees[2].firstName;

//Come Back on this at a later time