// PART I - Using objects as types
// a) most commen use case > collect the data in an object and make a database entry
const UserA = {
    name: "Jochen",
    email: "jochenruland@web.de",
    isActive: true
}

// b) but objects are used in functions > you pass it to a function or a function returns an object
function createUser({name: string, isPaid: boolean}) {}

createUser({name: "Jochen", isPaid: false});

// c) confusing syntax > what happens when a function returns an object
// function createCourse():{} {} > a funtion of type "object" {} and then comes the function definition {} 
function createCourseDescription():{} {
    return {}
}

// let's fill the object with properties
function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 3.99} // must return an object with the poperties defined in the function return type
}

// PART II - type aliases
// we define like an object with keyword "type"; than the properties are defined using corresponding types

type UserB = {
    name: string;
    email: string;
    isActive: boolean
}

// Advantages of creating a type alias is: whenever I create a function and I want to pass exact the type of UserB, I can adhert this type to the function parameter and define it as the return value of the function 
function createUserB(userb: UserB): UserB {
    return {name: "Philipp", email: "123@web.de", isActive: true}// Object of type UserB
}

// now you have to pass an object of type UserB 
createUserB({name: "Jochen", email: "jochenruland@web.de", isActive: false})



// PART III
// a) readonly > you define a variale that others cannot change
type UserC = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number // ? > defines an optional property or variable
}

// define a UserC
let myUserC: UserC = {
    _id: "1234",
    name: "Philipp",
    email: "p@p.com",
    isActive: false
}

// now I can't change the value of myUserC._id -> typescript complains
// myUserC._id = "5667"

// b) using alias types to create a new alias type combining differnt types together
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type  cardDetails = cardNumber & cardDate & {cvv: number}

export {}
