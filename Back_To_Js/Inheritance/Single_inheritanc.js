class Parents{
    constructor(name = "", age = ""){
        this.name = name;
        this.age = age;
    }
}

// Child Class  extends <= this use protery inherti parents

class Child extends Parents{
    constructor(n, a, m){

        super(n, a)
        this.mobile = m;
    }

}


const p1 = new Parents("Papa", 34)
console.log(p1);

const chlid1 = new Child("Sumit", 19, "Apple");
console.log(chlid1);