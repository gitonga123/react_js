//Reading Command-Line Arguments
//process.argv use to access the incomming command-line
//arguments.
//argv stands for argument vector
//its an array containg node and the full path to the this file
//as it two first element the third element is the target.txt.

const fs = require('fs'),filename = process.argv[2];

console.log(process.argv);
if(!filename){
    throw Error("A file to watch must be specified");
}
fs.watch(filename,function(){
    console.log("File " + filename + " just changed");
});

console.log("Now Watching " + filename + " for changes ...");
