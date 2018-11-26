// var num = 0;

// document.getElementById('clickbutton').addEventListener('click', function(){
// 	num++;
// 	document.getElementById("clickbutton").innerHtml= num;
// });


var value = 0;

function handleClick() {
	value++;
	document.getElementById("clickbutton").innerHTML = value;
}

document.addEventListener('keypress',handleKeyPress);

function handleKeyPress(event) {
	var keyPressed = event.key;
	document.getElementById("text").innerHTML = "Key Pressed: " + keyPressed;
}