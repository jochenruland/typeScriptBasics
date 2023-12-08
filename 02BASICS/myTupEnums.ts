// Tuples
// PART I

// Tuples are a special use of Array with some restrictions on it
// const userA: (string | number | boolean)[] = ["hc"] // we want a string, a number and a boolean in a strict order - specially used in API definitions; but this type defintion does not define the order
let userTuple: [string, number, boolean]; // strong definition of order and entries
userTuple = ["hc", 1, true];

// other use case > rgb
let rgb: [number, number, number] = [255, 123, 112]; // garanty that there will be always 3 numbers

// defining a type like this
type WebUser = [number, string];

const newUser: WebUser = [23, "Hans"];

// you can change the values of a tuple - as it is just an array
newUser[1] = "Peter"; 

// you can use all the methods of an array
// newUser.push(true) // > here it is showing an error but in some older versions of typescript this is still allowed - it is a bug




export {}