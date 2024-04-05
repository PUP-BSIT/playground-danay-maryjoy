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

class Person2{
    name: string = "John Doe";
    email: string = "test@gmail.com";

    printName(){
        console.log(this.name);
    }
}

const person1 = new Person2();
person1.printName;

person1["name"] = "Jane Dee";
console.log(person1["name"]);
person1.email = "jane@test.com"
console.log(person1.email);

class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
        console.log(`Animal object is created with name value of ${this.name}`);
    }
}

const animal1 = new Animal("Fish Fillet");
