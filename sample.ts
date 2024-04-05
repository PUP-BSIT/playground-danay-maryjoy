type Vehicle = {
    plate_no : string;
    owner_name : string;
    speed : number;
    printSpeed() : void;
}

type Person = {
    full_name : string;
    birthday : Date;
    speed : number;
    printSpeed(): void;
}

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

const janeDee : Person = {
    full_name : "Jane Dee",
    birthday : new Date("2002-03-25"),
    speed : 6.5,
    printSpeed(){
        console.log(`The current speed of ${this.full_name} is ${this.speed} ${DistanceUnit.KILOMETER}`);
    }

}

janeDee.printSpeed();

type Contestant= Person | Vehicle;

function speedTest(contestant: Contestant){
    contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);

