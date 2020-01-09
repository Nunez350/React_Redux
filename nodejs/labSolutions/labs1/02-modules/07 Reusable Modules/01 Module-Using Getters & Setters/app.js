var flight = require("./flight");

var flight2 = require("./flight");

flight.setNumber(525);
flight.setOrigin("BLR");
flight.setDestination("DLI");

console.log(flight.getInfo());
console.log(flight2.getInfo());