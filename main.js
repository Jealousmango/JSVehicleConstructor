function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed, distance_travelled){
    var vehicle = {}; // the object that will be returned
    vehicle.name = name,
    vehicle.numberOfWheels = numberOfWheels,
    vehicle.numberOfPassengers = numberOfPassengers,
    vehicle.speed = speed,
    vehicle.distance_travelled = distance_travelled,
    vehicle.addPass = function() {
        vehicle.numberOfPassengers += 1;
        console.log("Passenger has been picked up! Total passengers:" + vehicle.numberOfPassengers);
        return vehicle;
    },
    vehicle.makeNoise = function() { // method that "makes noise"
        console.log(vehicle.name + " honks loudly");
        return vehicle;
    },
    vehicle.updateDistanceTravelled = function() {
        vehicle.distance_travelled += vehicle.speed;
        console.log(vehicle.speed, "******");
        return vehicle;
    },
    vehicle.move = function() {
        vehicle.updateDistanceTravelled();
        console.log(vehicle.distance_travelled, "****");
        vehicle.makeNoise();
        return vehicle;
    },
    vehicle.checkMiles = function() {
        console.log(vehicle.distance_travelled);
        return vehicle;
    }
    return vehicle; // return the created object
}

var Bike = VehicleConstructor("Bike", 2, 1, 5, 0);
Bike.makeNoise();
Bike.makeNoise = function() {
    console.log(Bike.name + " rings a little bell");
    return Bike;
}
Bike.makeNoise().move().checkMiles();

var Sedan = VehicleConstructor("Sedan", 4, 4, 30, 0);
Sedan.makeNoise = function() {
    console.log("Honk! Honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 4, 18, 10, 0);
Bus.addPass().addPass().addPass(); // can be chained due to this function returning vehicle

var Jeep = VehicleConstructor("Jeep", 2, 1, 20, 0);
Jeep.move().move().checkMiles();
