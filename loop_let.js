var funcs = [];
var functs = [];
for(let i =0; i < 10; i ++){
    funcs.push(function () {
       console.log(i); 
    });
}

funcs.forEach(function(func) {
    func();
});

//using Var - which does hoisiting

for (var index = 0; index < 10; index++) {
    functs.push(function () {
        console.log(index);
    });    
}

functs.forEach(function (funcsy) {
    funcsy();
    // outputs the number "10" ten times
});