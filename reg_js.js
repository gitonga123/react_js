//sequence of characters tht forms a search patter
//syntax /pattern/modifiers

let pattern = /Daniel/i;

//daniel -> pattern
//i is a modifier to be case-sensitive

let string_search = "My Name is Daniel";
//search returns the position of the match

console.log(string_search.search(pattern));

//replace method returns a modified string where ther pattern is replaced

console.log(string_search.replace(pattern,"Mutwiri"));
//i - case-senstive matching
//g - global match
//m - multiline matching
//\d find a digit
//\s find a whitespace character
//\uxxx unicode search

console.log(pattern.test("Daniel"));
console.log(pattern.test("am a hero"));

let myPat = /e/;

console.log(myPat.test("The best things in life are free !"));

//using the exec() ->
//returns a string if found else null

console.log(myPat.exec("This is Kenya"));//["e", index: 9, input: "This is Kenya"]
