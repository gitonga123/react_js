// 
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

var Rebels = pilots.filter(function (pilot) {
	return pilot.faction === "Rebels";
});

var Empire = pilots.filter(function (pilot) {
	return pilot.faction === "Empire";
});

// using arrow functions

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(Empire);
console.log(empire);
console.log(rebels);
console.log(Rebels);