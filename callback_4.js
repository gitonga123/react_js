// CPS - Continuation Passing Style
function myFunction(x, callback) {
	callback(x);
}

var answer = 0;
myFunction(10, function(x) {
	var result = x * x;

	myFunction(result, function(x) {
		var result2 = x + x;

		myFunction(result2, function(x) {
			answer = x + 100;
			console.log(answer);
		})
	});
});