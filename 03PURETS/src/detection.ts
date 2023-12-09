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