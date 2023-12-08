// Enums

// PART I
// Enums exist to make some restrictions on the values which are allowed to be elected by the user
const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

let seat: number = 1;

if (seat === 1) {
    // you make checks like this but what if someone changes the value of the constants? > Better with enums
}

// Better done with enums
// enum SeatChoice {} -> this generally works but translates into a immediately invoked function (ifi) in javascript - means that it creates some complicated javascript code; therefore define as const variable
const enum SeatChoice {
    AISLE = 10, // you can attibute initial values - setting the start value > follow up values will be incremented
    MIDDLE,
    WINDOW,
    FORTH // can be enlarged quickly
}

const hcSeat = SeatChoice.MIDDLE; // the selection is limited here by the values defined in the emums

