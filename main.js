function VehicleConstructor(name, numberOfWheels, numberOfPassengers){
    var vehicle = {}; // the object that will be returned
    vehicle.name = name,
    vehicle.numberOfWheels = numberOfWheels,
    vehicle.numberOfPassengers = 4,
    vehicle.addPass = function() {
        vehicle.numberOfPassengers += 1;
        console.log("Passenger has been picked up! Total passengers:" + vehicle.numberOfPassengers);
        return vehicle;
    },
    vehicle.makeNoise = function() { // method that "makes noise"
        console.log(vehicle.name + " honks loudly");
        return vehicle;
    };
    return vehicle; // return the created object
}

var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise();
Bike.makeNoise = function() {
    console.log(Bike.name + " rings a little bell");
}
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 4);
Sedan.makeNoise = function() {
    console.log("Honk! Honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 4, 18);
Bus.addPass().addPass().addPass(); // can be chained due to this function returning vehicle
