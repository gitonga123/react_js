//try statement -> lets you test a vleck of code for errors
//catch lets you handle the error
//throw lets you create custom errors
//finally lets you execute code after the try catch, regardles of the result

// try {
//     addalert("Welcome Guest")
// } catch (error) {
//     document.getElementById("demo").innerHTML = error.message;
//     console.error(error.message);
//     console.error(error.name);
// }

//When Javascript encouters error it will stop and generate an error message
//throw and exception -> Error Object with name and message
//Throw statement lets you create a custom error
//throw "That's Not Me";

//this allows you to control the program flow and generate custom error messages

function  myTestFunction() {
    let message, x;
    message = document.getElementById("demo");
    message.innerHTML= "";

    x = document.getElementById("demo_input").value;
    console.log(x);
    try {
        if(x == "") throw "Empty";
        if(isNaN(x)) throw "Not a Number";
        debugger;
        x = number(x);
        
        if(x < 5) throw "too low";
        message.innerHTML = "Number is " + x;
        if (x > 10) throw "Too high";
    } catch (error) {
        message.innerHTML = "Input is " + error;
    } finally{
        document.getElementById("demo_input").value="NAN";
    }
}