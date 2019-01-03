// What’s different here is that reduce passes the result of this callback
// (the accumulator) from one array element to the other.

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

// get the total number of experienced years

var totalYears = pilots.reduce(function(accumulator, pilot) {
	return accumulator + pilot.years
}, 0);

console.log(totalYears);

// using the arrow functions

const totalYearz = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

console.log(totalYearz);

var mostExpPilot = pilots.reduce(function(oldest, pilot) {
	return (oldest.years || 0) > pilot.years ? oldest: pilot
}, {});

console.log(mostExpPilot);