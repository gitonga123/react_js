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


// practise

var fullName = [
	{first: 'Daniel', last: 'Mutwiri'},
	{first: 'James', last: 'Kubaye'},
	{first: 'Azat', last: 'Mardan'},
	{first: 'Azat', last: 'Donmezow'},
	{first: 'Washin', last: 'Zepata'}
]

const name = fullName.map(names => names.first + " " + names.last);

console.log(name);

name.map(naming => console.log(naming));