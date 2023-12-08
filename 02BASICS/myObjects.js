"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PART I - Using objects as types
// a) most commen use case > collect the data in an object and make a database entry
var UserA = {
    name: "Jochen",
    email: "jochenruland@web.de",
    isActive: true
};
// b) but objects are used in functions > you pass it to a function or a function returns an object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Jochen", isPaid: false });
// c) confusing syntax > what happens when a function returns an object
// function createCourse():{} {} > a funtion of type "object" {} and then comes the function definition {} 
function createCourseDescription() {
    return {};
}
// let's fill the object with properties
function createCourse() {
    return { name: "reactjs", price: 3.99 }; // must return an object with the poperties defined in the function return type
}
// Advantages of creating a type alias is: whenever I create a function and I want to pass exact the type of UserB, I can adhert this type to the function parameter and define it as the return value of the function 
function createUserB(userb) {
    return { name: "Philipp", email: "123@web.de", isActive: true }; // Object of type UserB
}
// now you have to pass an object of type UserB 
createUserB({ name: "Jochen", email: "jochenruland@web.de", isActive: false });
// define a UserC
var myUserC = {
    _id: "1234",
    name: "Philipp",
    email: "p@p.com",
    isActive: false
};
