function vehicle (brand, model, maxSpeed){
    this.brand = brand;
    this.model = model;
    this.maxSpeed = maxSpeed;
}

vehicle.prototype.accelerate = (speed) => {
    if(this.maxSpeed > speed){
        console.log(`The speed is ${speed}km/h.`)
    } else {
        console.log("The speed limit was reached.");
    }
}

vehicle.prototype.stop = () => {
    console.log(`The vehicle has stopped`);
}