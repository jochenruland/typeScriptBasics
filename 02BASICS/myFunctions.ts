// PART I ---------------------------------------------------

// in this case the function type is infered as any > in case of functions we should have type checking on function parameters and be clear on function return values
function addTwo(num) {
    return num + 2
}

addTwo(5);
//addTwo("5") > would work but not what we want

// better practice
function addThree(num: number) {
    return num + 3;
} 

// static typed return values for functions to avoid that the function will return a value you are not expecting
function addFour(num: number): number {
    return num + 4;
    // with typed return values for functions I cannot return a string f.ex. 
} 


// PART II -----------------------------------------------

// another problem > if we use a string function on the function parameter and it is not defined as string people might enter an number and the function will throw an error - example
function getUpper(val: string) {
    // this return statement can only work with string values > function parameters therefore have to be strictly typed
    return val.toUpperCase();
}


// Using the same parameters in different functions
// A) signUp
function signUpUser(name: string, email: string, inPaid: boolean) {

}

// arrow funtions with default value for the isPaid parameter
// B) Login
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

// applying the function will check the types
signUpUser("Jochen","jochenruland@web.de", false);

// applying the function with use of default values
loginUser("Jochen", "jochenruland@web.de")


// PART III -------------------------------------------------

// there are cases where we want to return different types depending on what happens in the function
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 ok"
}

// A function whose declared type is neither 'void' nor 'any' must return a value.
const getHello = (s: string): string => {
    return "";  // we must return an empty string
}

// PART IV

const heros = ["thor", "spiderman", "ironman"];
//const heros = [1,2,3];

// loop through the heros array using an arrow funtion
// mouse hover over the funtion gives us a lot of information about the types > try out!
heros.map((hero): string => {
    return `hero is ${hero}`
})

// PART V 

// log Errors to the console
// not returning anything means the function is of type "void" -> this should be made explicit
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

// some functions never return anything - in this case they are of type "never"
// the never type represents values which are never observed -> means the function throws an exception or terminates execution of the program 
// cf. "more on funtions" in the documentation
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}