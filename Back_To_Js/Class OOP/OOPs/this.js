// class Student {
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
// }

// const Student1 = new Student ("Shubham", 23)
// const Student2 = new Student ("Shivani", 25)

// console.log(Student2)

// Basic Obj  Create 

// const Student = {
//     fullName : "Shubham Kashyap",
//     marks : 98.7,
//      printMarks :  () => {
//         console.log("Total Marks :", this.marks)
//      }
// }

//  one obj to another obj se prototype

const employee = {
    calcTax()  {
        console.log("Tax is every employee 10%")
    }
}


const karanArjun = {
    salary : 50000,
}

karanArjun.__proto__ = employee


