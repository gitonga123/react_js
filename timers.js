// Asynchronous Code using Timers
function asynchLog(val) {
	setTimeout(function() {
		console.log(val);	
	});
}

console.log("first");
asynchLog("second");
console.log("third");

