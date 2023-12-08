// PART I - Union types > combining different types
// a) case where we are not shure if the input is always a number but can also be a string
let score: number | string = 33;

score = 44;
score = "55";


// b) you can use it also with your custom types
type UserD = {
    name: string;
    id: number
}


type Admin = {
    username: string;
    id: number
}

let specificUser: UserD | Admin = {name: "Jochen", id: 334}; // now we have a user which in some cases can also be an admin

specificUser = {username: "Jochen", id: 24};

// c) Union types can be useful for functions in case they accept multiple values or return multiple kind of values
function getDBId(id: number | string) {
    // example of code which works for either number or string
    console.log(`DB id iss: ${id}`);

    // in this kind of functions you need really strong type checking in case you want to use string specific methods or number specific methods
    // example of typechecking
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}

getDBId(3);
getDBId("3")

// d) union with Arrays
const data1: number[] | string[] = [1,2,3,4] // this is either all numbers or all strings
const data2: (number | string)[] = [1,2,3,"4"] // now you can put either numbers or strings into the array

// e) set defined values 
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; // allowed
// seatAllotment = "crew"; // not allowed 

export {};