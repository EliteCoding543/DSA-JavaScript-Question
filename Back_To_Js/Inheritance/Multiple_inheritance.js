class Parents{
    constructor(name = "", age = ""){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log("Namste!");
    }
}

// Child Class  extends <= this use protery inherti parents

class Child extends Parents{
    constructor(n, a, m){

        super(n, a)
        this.mobile = m;
    }

    sayHi(){
        console.log("Hello!")
    }

}

class GrandChlid extends Child{
    constructor(n, a, m, c){
        super(n, a, m)
        this.cycle = c;
    }

    sayHi(){
        console.log("Hor Londe");
    }
}

const p1 = new Parents("Papa", 34)
console.log(p1);

const chlid1 = new Child("Sumit", 29, "Apple");
console.log(chlid1);

const GC = new GrandChlid("Abhi", 19, "Samsung", "Tricycle");
console.log(GC)

// Function Call 
p1.sayHi();
chlid1.sayHi();
GC.sayHi();