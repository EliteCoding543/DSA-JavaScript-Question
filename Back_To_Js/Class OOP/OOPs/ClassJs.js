// This is an class and blueprint 
class ToyotaCar {
    
    constructor(brand) {
        console.log("Creating new objects")
        this.brand = brand
    } 

    start() {
        console.log("Car Is Start...")
     }

     stop(){
        console.log("Car Now Stop....")
     }

    //  setBrand(brand){
    //    this.brandName = brand
    //  }
}

// Create an obj new keyword throw class using new keywoord 
let fortuner = new ToyotaCar("XUV 800")
// fortuner.setBrand("XUV 800")
let maruti = new ToyotaCar()