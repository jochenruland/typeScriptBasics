let greetings: string = "Hello Jochen";

console.log(greetings);

// number & type inference
// let userId: number = 334455; // Right but not good practice > use inference
let userId = 334455; // typescript is smart enough to indentify this as of type number

// boolean & type inference
// let isLoggedIn: boolean = false; // Right but not good practice > use inference
let isLoggedIn = false; // typescript is smart enough to indentify this as of type boolean

// any > any is not type checked
//let hero; // no type definition means variable will be defined as type any
let hero: string; // in this case it makes sense to define the type explicitly - otherwise it will be infered as any 

// function also should not be defined like this
function getHero() {
    return "thor";
}

hero = getHero();

export{};