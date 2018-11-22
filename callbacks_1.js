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
var ingredients = ['potatoes', 'onions', 'tomatoes','garlic'];
cook_soup(ingredients, dice);

cook_soup(ingredients, function( ingredients ) {
	return 'chopped-up-good- ' + ingredients;
});

function funcA() {
	funcB();
}

function funcB() {
	funcC();
}

function funcC() {
	console.log(Error().stack);
}

funcA();