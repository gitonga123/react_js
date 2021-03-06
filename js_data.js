//Javascript Dates Objects
//The date object lets you work with dates
//Javascript Data formats
//can be written as a string or as a number
//Dates written as numbers, specificy the number of milliseconds since January 1,
//1970, 00:00:00
//Date() creates a new date object with the current date and time;
//using the New Date(date string) creates a new date object from the
//specified date and time
let d = new Date("October 13, 2014 11:13:00");
let m = new Date(86400000); //using milliseconds

let d2 = new Date(99,5,24,11,33,30,0); //using the 7 numbers as arguments
//creates a new date object with the specified date and time
let d3 = new Date(99,4,24);

//the seven arguments are 
//year, month,date,hour,minute,second, millisecond
//document.getElementById('demo').innerHTML = d2.toDateString();

//Date Formats
//ISO : 2015-03-25
//Short Date "03/25/2015"
//Long Date Mar 25 2016 or 25 Mar 2015
//Full Date Wednesday March 25 2015
let date = new Date();
let df = new Date("2015-03-25"); //
let dfiso = new Date("2015-03-25T12:00:00Z"); //UTC time is defined with a capital let Z
let dfshort = new Date("2015/03/27");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log(dfshort);
document.getElementById("demo").innerHTML = new Date(m).toDateString();