//Node.js
//Access a file system
//reading, writing, renaming and deleting files
//creating useful and asynchronous file utilities
//Architecture and Core
//Patterns -> callbacks for handling asynchronous events
//JavaScriptisms -> JavaScript features and best practises
//supporting Code -> spawn and interact with child processes
//capture their output and detect state changes

//Asynchronous Coding/Programming -> Parallel Programming
//fs => File System

//require -> to use a Node.js Module
//Module -> is a self-contained bit of JavaScript that provides 
//functionality to be used elsewhere
//The harmony -> tells node to use the latest ECMAScript features available

const fs = require('fs');

fs.watch('target.txt', function(){
    console.log("File 'target.txt ' just changed");
});

console.log("Now watching target.txt for changes ...");