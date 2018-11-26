// SetTimeout method is used to schedule a task to be put on the event queue after a given
// amount of time.

// clearTimeout - is ued to cancel a timeout that is still pending
// setTime method call returns a numeric timerID that is used to identify
// the timer.
// This timerID can be passed into the clearTimeout() method call to stop the timer.
var timeout = setTimeout(function() {
	console.log("hello");
}, 1000);

clearTimeout(timeout); // clears the setTimeout callback from running
