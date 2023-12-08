// PART I
// Class definition in pure JavaScript
/* class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
} */

// Class in TypeScript 
class UserA {
    // type definition is done beginning of the class and not in the function definition for class variables
    email: string;
    name: string;
    readonly city: string = "Muenster" //if a variable is not defined an initial value in the constructor, then it needs an initializing value

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

// PART II
// creating an instance of the class by calling the constructure with the initializing values
const mySelf = new UserA("jochenruland@web.de", "Jochen"); 
// const mySelf.city = "Düsseldorf" // > not possible because variable city has been initialized as readonly

console.log(mySelf);

// Classes in TypeScript using private an public 
class UserB {
    // type definition is done beginning of the class and not in the function definition for class variables
    emailB: string; // everything that you do not mock as private is automatically public
    nameB: string;
    private cityB: string = "Muenster" //if a variable is not defined an initial value in the constructor, then it needs an initializing value
    // you can also define a variable as private by using #cityB > but this comes only from the JavaScript world

    constructor(email: string, name: string) {
        this.emailB = email;
        this.nameB = name;
        this.cityB = "Berlin"
    }
}

// creating an instance of the class by calling the constructure with the initializing values
const mySelfB = new UserB("jochenruland@web.de", "Jochen");

// mySelfB.cityB; // This variable cannot be accessed outside of the class

// PART III
// Making class definition much shorter
class UserC {

    private cityC: string = "Muenster" 

    constructor(
        public emailC: string,
        public nameC: string,
        private userIdC: number) {

        }
}

// creating an instance of the class by calling the constructure with the initializing values
const mySelfC = new UserC("jochenruland@web.de", "Jochen", 5);

// PART IV
// Getters and Setters > they are called access modifiers
class UserD {
    
    private _courseCount: number = 1;
    protected _courseNumber: number = 2;

    readonly cityD: string = "Muenster"; 
    constructor(
        public emailD: string,
        public nameD: string,
        private userIdD: number) {

        }
    
    // keyword "get" for getter functions
    get getAppleEmail(): string {
        return `apple${this.emailD}`
    }

    // if you have defined a private variable as above you need a getter and setter to access this variable
    get courseCount(): number {
        return this._courseCount
        // here simple > but there could be much more logic in a getter function
    }

    // setter functions do not have any return type because by defintion they attribute new values to variables
    set courseCount(newValue: number) {
        if (newValue <= 1) {
            throw new Error("Course count should be more than 1")
        } 
        this._courseCount = newValue;
    }

    // private methods - you cannot access these methods outside of the class
    private deleteToken(): void {
        console.log("Token deleted")
    } 
}

// But there is another modifier which is used in case of inheritence
class SubUserD extends UserD {
    isFamily: boolean = true;

    changeCourseParameters() {
        // this._courseCount = 4 // cannot be accessed in the subclass because it is private
        this._courseNumber = 5 // this variable can be accessed in the subclass because it has been defined as "protected"

    }
}

// creating an instance of the class by calling the constructure with the initializing values
const mySelfD = new UserD("jochenruland@web.de", "Jochen", 5);

console.log(mySelfD);

