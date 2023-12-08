// PART I - Abstract Classes

// Abstract classes are blueprints. You cannot create an object from them. You only use them to inherit from an abstract class 
// compared to interfaces > interfaces are "implemented" (keyword: implements) while abstract classes are inherited (keyword: extends)
abstract class TakePhotoAbstract {
    // in a class we need a constructor 
    constructor(public cameraMode: string, public filter: string) {

    }

    // use the keyword "abstract" also for function blueprints
    abstract getSepia(): void

    // you can also implement methods in the abstract class which are available in the inherited classes
    getReelTime(): number {
        // make some calculations ...
        return 8
    }
}

// When you define an abstract class (cf. above), no new object can be created from this class - you have to create a subclass which inherits from the abstract class
// const photo = new TakePhotoAbstract("Test", "Test");

// now use this class in a subclass > other than from an interface it can inherit from the other class using the keyword "extends" 
// here we will implement the abstract class
class Instagram extends TakePhotoAbstract {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter) // With the method super() you call the contructor of the superior class
    }

    // the abstract methods of the superior class have to be implemented
    getSepia(): void {
        console.log("Sepia")
    
    }

    // use methods of the superior class
    public test = this.getReelTime() + 10; 

    // Plus: all blueprint function implementations of the abstract class are available in this class here > that is the main difference to interfaces and the power of abstract classes
}