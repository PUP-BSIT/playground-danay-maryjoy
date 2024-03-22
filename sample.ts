type Primitive = {
    plate_no : string;
    owner_name : string;
    speed : number;
    printSpeed() : void;
}

type Vehicle = Primitive;
type Person = Primitive;


enum DistanceUnit {
    KILOMETER = "km",
    MILE = "m"
}

const myCar : Vehicle = {
    plate_no : "ABC 123",
    owner_name : "John",
    speed : 50,
    printSpeed(){
        console.log(`The current speed of ${this.plate_no} is ${this.speed} ${DistanceUnit.MILE}`);
    }
}

myCar.printSpeed();