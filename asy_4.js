function slowTask() {
	console.log("slow task finished");
}

function asyncSlowTask(val) {
	setTimeout(slowTask, 2000);
}

function fastTask() {
	console.log("fast task finished");
}

fastTask();
asyncSlowTask();
fastTask();
asyncSlowTask();
fastTask();
fastTask();
