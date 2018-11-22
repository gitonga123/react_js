// callbacks - piece of executabe code that is passed as an arguement
// to another peice of code, which is expected to call back the argument
// at some convinient time
function cook_soup(veggies, callback) {
	var soup = "";
	for(let i = 0, length1 = veggies.length; i < length1; i++){
		soup = soup + callback(veggies[i]) + ',';
	}

	soup = soup + ' and the secret ingredients';

	console.log(soup);
}

function dice(veggie) {
	return 'diced-' + veggie;
}

cook_soup(['potatoes', 'onions', 'tomatoes','garlic'], dice);
