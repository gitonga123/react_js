
function slowTask() {
	var now = new Date().getTime();
	while(new Date().getTime() < now + 2000) {}

	console.log("Slow task finished");
}

function fastTask() {
	console.log("fast task finished");
}



fastTask();
slowTask();
fastTask();
fastTask();
fastTask();

