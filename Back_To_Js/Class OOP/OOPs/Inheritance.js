class Person {
   constructor(){
       this.species = "Home sapiense"
   }

    eat(){
        console.log("Eat an Every Person...")
    }

    sleep(){
        console.log("Sleep An Every Person...")
    }
}

class Engineer extends Person {
    work(){
        console.log("Problem Solve and Bulid Something...")
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Some Paitent...")
    }
}

const ShubhamObj = new Engineer()