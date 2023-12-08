// PART I
// a)  Defining an Array like this will attribute the type never and you cannot add any values
/*
const superHeros = []
superHeros.push("spiderman");
*/
// better practice
var superHeros = []; // variable superheros is of type string Array and we attribute an empty array first
superHeros.push("spiderman");
// two different ways of defining Arrays
var heroPower1 = [];
var heroPower2 = [];
heroPower1.push(2);
var allUsersA = [];
allUsersA.push({ name: "Jochen", isActive: true });
