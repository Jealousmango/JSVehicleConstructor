function Vehicle(name, numberOfWheels, numberOfPassengers, speed, distance_travelled){
    // var vehicle = {}; // the object that will be returned
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;
    this.distance_travelled = distance_travelled;
}
Vehicle.prototype.addPass = function() {
    this.numberOfPassengers += 1;
    console.log("Passenger has been picked up! Total passengers:" + this.numberOfPassengers);
    return this;
};
Vehicle.prototype.makeNoise = function() { // method that "makes noise"
    console.log(this.name + " honks loudly");
    return this;
};
Vehicle.prototype.updateDistanceTravelled = function() {
    this.distance_travelled += this.speed;
    console.log(this.speed, "*");
    return this;
};
Vehicle.prototype.move = function() {
    this.updateDistanceTravelled();
    console.log(this.distance_travelled, "**");
    this.makeNoise();
    return this;
};
Vehicle.prototype.checkMiles = function() {
    console.log(this.distance_travelled);
    return this;
};
// return this; // return the created object


var Bike = new Vehicle("Bike", 2, 1, 5, 0);
Bike.makeNoise();
Bike.makeNoise = function() {
    console.log(Bike.name + " rings a little bell");
    return Bike;
}
Bike.makeNoise().move().checkMiles();

var Sedan = new Vehicle("Sedan", 4, 4, 30, 0);
Sedan.makeNoise = function() {
    console.log("Honk! Honk!");
}
Sedan.makeNoise();

var Bus = new Vehicle("Bus", 4, 18, 10, 0);
Bus.addPass().addPass().addPass(); // can be chained due to this function returning vehicle

var Jeep = new Vehicle("Jeep", 2, 1, 20, 0);
Jeep.move().move().checkMiles().move().move().checkMiles();
