class ToyotaCar {
     start() {
        console.log("Car Is Start...")
     }

     stop(){
        console.log("Car Now Stop....")
     }

     setBrand(brand){
       this.brandName = brand
     }
}

let fortuner = new ToyotaCar()
fortuner.setBrand("XUV 800")
let maruti = new ToyotaCar()