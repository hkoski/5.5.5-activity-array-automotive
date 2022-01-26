//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")


//import { Vehicle as _Vehicle } from "./vehicleBaseClass.js";
//when I use import instead of const I get a node warning and it also says I cannot use import statement outside a module. I'm confused.

// ideally, one of these ^^ should pull ALL of the info from vehicleBaseClass.js into this js ?

// this is not correct:
//import Vehicle from "./vehicleBaseClass"

//this shows how to call from this module...
//let v = new _Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers =6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
        //return this.fuel;
    }}
    
    //I don't understand, I keep getting "Vehicle is not defined" .. it was defined in the parent class ??
    
    
    
    
    // maybe I read too much into the 'add a constructor' & 'add super keyword' because this is where my mind went first. it's simpler than that. 
    //constructor(passenger, wheels, speed, fuel, mileage){
    //     this.passenger = passenger;
    //     this.wheels = wheels;
    //     this.speed = speed;
    //     this.fuel = fuel;
    //     this.mileage = mileage;}

// I still struggle with how to start (where to begin) the methods portion

