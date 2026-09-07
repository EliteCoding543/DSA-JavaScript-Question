// class Person {
//    constructor(){
//        console.log("enter Person contructor...")
//        this.species = "Home sapiense"
//    }

//     eat(){
//         console.log("Eat an Every Person...")
//     }

// }

// class Engineer extends Person {
//     constructor(branch){
//         console.log("enter engg contructor...")
//         super() // to invoke parent contructor 
//         this.branch = branch
//         console.log("exit engg contructor...")
//     }
//     work(){
//         console.log("Problem Solve and Bulid Something...")
//     }
// }

// or ya ase bhi args pass kr skte h invoke krta h super keyword

class Person {
   constructor(name){
       this.species = "Home sapiense"
       this.name = name
   }

    eat(){
        console.log("Eat an Every Person...")
    }

}

class Engineer extends Person {
    constructor(name){
        super(name) // to invoke parent contructor 
    }
    work(){
        console.log("Problem Solve and Bulid Something...")
    }
}


const ShubhamObj = new Engineer("Softwere engg")
// Engineer {species: 'Home sapiense', name: 'Softwere engg'}
// name: "Softwere engg"
// species: "Home sapiense"