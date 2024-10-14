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

vehicle.prototype.showInfo = () => {
    console.log(`Brand = ${this.brand}`);
    console.log(`Model = ${this.model}`);
    console.log(`MaxSpeed = ${this.maxSpeed}`);
}

vehicle.prototype.compareSpeed = (otherVehicle) => {
    if (this.maxSpeed > otherVehicle.maxSpeed) {
      console.log(`The ${this.brand} model ${this.model} is faster than the ${otherVehicle.brand} model ${otherVehicle.model}.`);
    } else if (this.maxSpeed < otherVehicle.maxSpeed) {
      console.log(`The ${otherVehicle.brand} model ${otherVehicle.model} is faster than the ${this.brand} model ${this.model}.`);
    } else {
      console.log(`The ${this.brand} model ${this.model} and the ${otherVehicle.brand} model ${otherVehicle.model} have the same top speed.`);
    }
  };

function car(brand, model, maxSpeed, doors){
    vehicle.call(this, brand, model, maxSpeed);

    this.doors = doors;
}

car.prototype.openDoors = () => {
    console.log(`The ${this.doors} doors of the ${this.brand} car opened.`);
}

function motorbike(brand, model, maxSpeed, sidecar){
    vehicle.call(this, brand, model, maxSpeed);

    this.sidecar = sidecar;
}

motorbike.prototype.showSidecar = () => {
    if(this.sidecar){
        console.log("The motorbike has a sidecar.");
    } else{
        console.log("The bike doesn't have a sidecar.");
    }
}

const car1 = new car("Mclaren", "750S", 332, 2);
const car2 = new car("Ferrari", "F40", 324, 2);
const motorbike1 = new motorbike("Harley-Davidson", "Tri Glide Ultra", 180, true);
const motorbike2 = new motorbike("Ducati", "Panigale V4", 300, false);

car1.showInfo();
car2.showInfo();
motorbike1.showInfo();
motorbike2.showInfo();

car1.accelerate(300);
car2.accelerate(350);
motorbike1.accelerate(100);
motorbike2.accelerate(300);

car1.stop();
car2.stop();
motorbike1.stop();
motorbike2.stop();

car1.compareSpeed(car2);
motorbike1.compareSpeed(motorbike2);
