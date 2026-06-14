class Car{
    //  How to varivale acces in class 
    type = "Land";
    constructor(b, t, c){
        this.brand = b;
        this.tyers = t;
        this.color = c;
    }
    
    tellAboutCar(){
        console.log(this.brand, this.tyers, this.color);
    }
}

let c1 = new Car("BMW", 4, "white");
let c2 = new Car("BYD", 4, "Black");

console.log(c1);
console.log(c2);