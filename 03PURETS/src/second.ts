/* // PART I
// Coming back to Interfaces > they are also called protocols, means that they define in which way an application is designed
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number
}

interface Story {
    createStory(): void
}

// Now creating a class which follows this protocol has to define all the properties and functions defined in the interface
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: boolean // you are allowed to implement more properties and functions as defined in the interface but not less
    ) {}

    // You have to implement the method with the exact name defined in the interface
    createStory(): void {
        console.log("Story created")
    }
} */