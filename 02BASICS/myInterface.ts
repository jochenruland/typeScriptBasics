// Interfaces

// PART I
// Creating a new user with email, udi, google loginUser, ...AISLE.
// Inferface defines variables and methods, but how you implement these is up to the developer - loose form of class
interface WebUser {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string, // Optional property,
    //defining methods in an interface
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const jochen: WebUser = {
    dbId: 22,

    email: "jochenruland@web.de",
    userId: 1234,
    // here are the funtion implementations of the interface
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "Jochen", off: 10) => {
        return 10
    }
}

// PART II 
// Reopening the interface > add additional values to the above interface (normally that would be some code imported from a libary which you want to enlarge)
interface WebUser {
    githubToken?: string
}
// now see what happens above in the definition of the variable jochen of type WebUser > the newly defined property is shown as missing! So we make this an optional property

// PART III
// Inheritance 
interface Admin extends WebUser {
    role: "admin" | "ta" | "learner"
}





export {}
