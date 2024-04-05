var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "km";
    DistanceUnit["MILE"] = "m";
})(DistanceUnit || (DistanceUnit = {}));
var myCar = {
    plate_no: "ABC 123",
    owner_name: "John",
    speed: 50,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.plate_no, " is ").concat(this.speed, " ").concat(DistanceUnit.MILE));
    }
};
myCar.printSpeed();
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.full_name, " is ").concat(this.speed, " ").concat(DistanceUnit.KILOMETER));
    }
};
janeDee.printSpeed();
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(janeDee);
