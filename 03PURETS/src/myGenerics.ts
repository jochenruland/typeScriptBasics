// Generics make components resuable and more flexible with regard to types

// PART I
// Example with Arrays (which are Generics behind the scenes) -> which are already implemented in the language
const score: Array<number> = [];
const names: Array<string> = [];

// PART II
// We can define a function or variable as "either - or" > but thus we have a lot of confusion because the return value can be "either boolean or number" > Generics solve this problem
// any also does not solve this problem
function indentityOne(val: boolean | number): boolean | number {
    return val;
}

// Solution with Generics > You define the function as a "Type" (which can be any kind of custom type) and the return value will be the same as the defined type of "val"
// Difference to "any" > once you have defined one type it will be "logged"
function indentityTwo<Type>(val: Type): Type {
    return val;
}

// hover over the function to see the type definition
indentityTwo("3");

// The type can be defined as any kind of custom type
function indentityThree<T>(val: T): T {
    return val;
}

indentityThree(true);

// Part III
// use of Generics with custom types
interface Bottle {
    brand: string,
    type: number
}

indentityThree<Bottle>({brand: "champagne", type: 5})

// Part IV 
// More details on Generics in case of Arrays > taking input as an array

// Case 1: The return type here is not an array but a single value > it must be one value from the input array
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

// Case 2: Convert the above function into an arrow function
// One remark: in react people use <T,> syntax with comma to mark a generic type and signal that this is not JSX code
const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

// Part IV
// Using a type parameter in generics that is constrained by another type parameter
function anotherFunction<T, U extends number>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}

// using this method -.as U extends type number, you cannot enter a string for the val2
anotherFunction(3, "4");


// real use case
interface Database {
    connetion: string,
    username: string,
    password: string
}

function realWorldFunction<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}

realWorldFunction(1, {connetion: "connect", username: "JR", password: "123PW"});

// PART V
// Using classes as gererics
// Example 2 Sellable items 
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

// this class will be able to handle the commen use cases for example in common libraries
class Sellable<T> {
    public cart: T[] = [];

    // Now this method can handle any kind of items because its class type is generic
    addToCart(product: T) {
        this.cart.push(product)
    }
}


