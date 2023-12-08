"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PART I - Union types > combining different types
// a) case where we are not shure if the input is always a number but can also be a string
var score = 33;
score = 44;
score = "55";
var specificUser = { name: "Jochen", id: 334 }; // now we have a user which in some cases can also be an admin
specificUser = { username: "Jochen", id: 24 };
// c) Union types can be useful for functions in case they accept multiple values or return multiple kind of values
function getDBId(id) {
    // example of code which works for either number or string
    console.log("DB id iss: ".concat(id));
    // in this kind of functions you need really strong type checking in case you want to use string specific methods or number specific methods
    // example of typechecking
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
getDBId(3);
getDBId("3");
// d) union with Arrays
var data1 = [1, 2, 3, 4]; // this is either all numbers or all strings
var data2 = [1, 2, 3, "4"]; // now you can put either numbers or strings into the array
// e) set defined values 
var seatAllotment;
seatAllotment = "aisle"; // allowed
