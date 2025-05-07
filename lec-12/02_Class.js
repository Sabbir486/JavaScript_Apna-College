class Car{

    //Constructor is a special type of Method
    constructor(brand, milage){
        console.log("Creating new object");
        this.brand = brand;
        this.milage = milage;
    }


    start(){
        console.log("Start");
        
    }

    stop(){
        console.log("Stop");
        
    }

    setBrand(Brand){
        this.brand = Brand;
    }
}

let fortuner = new Car("Fortuner", 10);
//fortuner.setBrand("Fortuner");

let lexus = new Car();
//lexus.setBrand("Lexus");

