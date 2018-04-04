//a tail call is when a function is called as the last
//as the last statement in another function

function doSomething(){
    return doSomethingElse();//tail call
}