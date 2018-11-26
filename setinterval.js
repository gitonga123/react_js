// setInterval method is used to schedule a reoccurring task to be put on the event queue every time a given number of milliseconds elapses.
// The clearInterval() method is used to stop an interval timer set by setInterval().
// The setInterval() method call returns a numeric timerID that is used to identify the interval timer.
// This timerID can be passed into the clearInterval() method call to stop the interval timer.
var count = 0;
//var intervals = setInterval(function() {
//	count ++;
//	console.log("After " + count + " seconds");
//}, 1000);
// interval;

var interval = setInterval(function(){
	count++;
	console.log(count);
	if (count >= 3) {
		clearInterval(interval); // clears the interval after it is called 3 times
	}
}, 1000);

interval;

