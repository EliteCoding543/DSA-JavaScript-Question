// let obj1 = {
//   name: "Shubham",
//   address: {
//     city: "Delhi"
//   }
// };

// let obj2 = {...obj1}; // shallow copy

// obj2.address.city = "Noida";

// console.log(obj1.address.city);
// console.log(obj2.address.city);

let person = {
    Name : "Shubham",
    age : 22,
    city : "Noida"
}

for(let key in person){
    console.log(person.key)
}