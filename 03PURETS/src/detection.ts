// Narrowing > SPECIAL CASES WHERE typeof RETURNS object AS TYPE 
// PART I
function detectType(val: number | string) {
    // return val.toLowerCase() // not allowed to use this because we do not know if the input value is a string
    if (typeof val === "string") {
        return val.toLocaleLowerCase()
    }

    // this part of the code will only be executed if it is not a string > so it must be a number and therefore we can apply + 3
    return val + 3;

    // It becomes compliated when we use arrays, because arrays are of type object and we have to validate them as object and there can be many kind of objects   
}

// Use case where you check if an id of type string does exist in a database or if it is null
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide id");
        return
    }

    return id.toLowerCase();
}


// now let's handle this with arrays > example from typescript documentation
// we have 3 cases of types which we have to check - but the case we have not automatically covered is an empty string "", which returns true or false
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        } 
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

// PART II
// Narrowing with use of in operator
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    // now we want to check if the passed parameter is of type admin or not - Tricky!
    // return account.isAdmin // > not possible here because the property .isAdmin does not exist for variables of type User > we use the in operator
    if ("isAdmin" in account) { // check if the isAdmin property is part of the account
        return account.isAdmin;
    }

    return false;

}

// PART III
// Erverything which has been initialized with the "new" keyword can be identified with "instanceof"
const y = new Date();

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// PART IV
// type predicates
type Fish = {swim: () => void};
type Bird = {fly: () => void};

// we want to return a true or false
function isFish(pet: Fish | Bird): pet is Fish { // now the true value is casted as Fish
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet; // although we have checked it is a fish, typescipt is still confused when you hover over pet variable; because the isFish() method returns a boolean but not a type of Fish or Bird
        // solution > casting the above function as Fish
        return "fish food";
    } else {
        pet;
        return "bird food";
    }
}

// PART VI
// a) Discriminated Unions
interface Circle {
    // with the same property in every interface you can check it's kind
    kind: "cirlce",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "recatangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    // By checking the type with the property of the interface, typescript than only proposes/allows methods belonging to the corresponding type  
    if (shape.kind === "cirlce") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// b) The never type and exhaustiveness checking 
// The above function does not work in case you add a further type to your code (in this case we added Rectangle)
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "cirlce":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        // Precautionary step to assure that the code is future proofed
        // The code is complaining beause we added the "rectangle" shape and that is what we want in oder to add the "Rectangle" case to the code.
        default: 
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;

    }
}