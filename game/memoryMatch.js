// gloval variables go her
var interval;
var started = false;
var time = 0;
var ready = true;
var numCompleted = 0;

// execute function here;

setUp();

function randomAnswers() {
	var answers = [1,1,2,2,3,3,4,4,5];
	answers.sort(function(item) {
		return .5 - Math.random();
	});

	return answers;
}

function setUp() {
	var grid = document.getElementsByTagName("td");

	var answers = randomAnswers();

	var clickedArray = [];

	for(let i = 0, length1 = grid.length; i < length1; i++){
		 var cell = grid[i];
		 cell.completed = false;
		 cell.clicked = false;
		 cell.value = answers[i];

		 cell.addEventListener("mouseenter", function () {
		 	if (this.completed == false && this.clicked == false) {
		 		this.style.background = "orange";
		 	}
		 });

		 cell.addEventListener("mouseleave", function () {
		 	if (this.completed == false && this.clicked == false) {
		 		this.style.background = "blue";
		 	}
		 });

		 startTimer();

		 cell.addEventListener("click", function(){
		 	if (this.clicked == false && this.completed == false) {
			    clickedArray.push(this);
			    reveal(this);
			}
		 });
	}

  if(clickedArray.length == 2){

    if(clickedArray[0].value == clickedArray[1].value){
        //if a matching pair is found


    }
    else{
        //if a matching pair is not found


        setTimeout(function(){
            //after a 500ms delay


        },500);

    }

}
}

function reveal(cell) {
	cell.style.backgroundColor = "red";
	cell.innerHTML = cell.value;
	cell.clicked = true;
}

function startTimer() {
	if (started == false) {
		interval = setInterval(function() {
			time++;
			document.getElementById("timer").innerHTML = "Time Elapsed: " + time;
		}, 1000)

		started = true;
	}
}

function hide(cell) {
	cell.style.backgroundColor = "blue";
	cell.innerHTML = "";
	cell.clicked = false;
}

function complete(cell) {
	numCompleted++;
	cell.completed = true;
	cell.style.backgroundColor = "purple";
}