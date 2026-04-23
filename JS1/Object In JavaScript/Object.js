// let student = {
//     name : "Shubham",
//     age : 21,
//     city : "Noida"
// }

// console.log(student.name)
// console.log(student.age);
// student.phone = 9027431343  // New key add in obj

// console.log(student)

// 

// let obj1 = {
//    a : 10,
// }
// obj2 = obj1
// obj2.a = 30;
// console.log(obj1);
// console.log(obj2);

// ✅ 6️⃣ Modify Nested Value (Dry Run)

let student = {
    name : "Shubham", 
    age : 21,
    marks: {
        math : 90,
        eng : 80
    }
}

console.log(student.marks.math);
// ✅ 7️⃣ Add New Nested Property
student.marks.hindi = 75
console.log(student);
// ✅ 7️⃣ Add New Nested Property

let obj = {
    a:{
        b:{
            c: 50
        }
    }
}

console.log(obj.a.b.c);





