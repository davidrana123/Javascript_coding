class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleDetails(){
        return this.make + this.model + this.year
    }
}

//sub class

class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make, model,year)
        this.doors = doors;
    }

    displayDetails(){
        return super.vehicleDetails() + this.doors
    }
}

const myCar = new Car("Honda", "cicic", 2021, 4)

console.log(myCar.displayDetails())