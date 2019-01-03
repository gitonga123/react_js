// checkout
// .forEarch)_, for(...of), .for()
var officers = [
	{id: 20, name: 'Captain Piet'},
	{id: 24, name: 'General Veers'},
	{id: 56, name: 'Admiral Ozzel'},
	{id: 88, name: 'Commander Jerjerrod'}
];


var officersIds = [];

officers.forEach(function (officer) {
	officersIds.push(officer.id);
});

console.log(officersIds);

// using map

var officersIeds = officers.map(function (officer) {
	return officer.id;
});

console.log(officersIeds);

// using arrow functions

const officersIdes = officers.map(officer => officer.id);

console.log(officersIdes);
