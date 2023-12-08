// PART I

// a)  Defining an Array like this will attribute the type never and you cannot add any values
/*
const superHeros = []
superHeros.push("spiderman");
*/

// better practice
const superHeros: string[] = []; // variable superheros is of type string Array and we attribute an empty array first

superHeros.push("spiderman");

// two different ways of defining Arrays
const heroPower1: number[] = [];
const heroPower2: Array<number> = [];

heroPower1.push(2);

// Arrays with alias types
type UserA = {
    name: string;
    isActive: boolean;
}

const allUsersA: UserA[] = [];

allUsersA.push({name: "Jochen", isActive: true});

// Defining matrice Arrays
const MLModels: number[][] = [
    [255, 255, 255],
    [334, 334, 334]
]

export{}