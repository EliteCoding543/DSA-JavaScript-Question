let  Obj = {
    name : "Shubham",
    age : 21,
    isParesent : true,
    sayHi : () => {
        console.log("Hello User");
    },

    Address : {
        city : "Noida",
        country : "India"
    }

}

// Key Value pair ko Property Khate h How to be check onj property Exixst Or not 

console.log(Obj.hasOwnProperty("Address")); // Determines whether an object has a property with the specified name.

if(!Obj.hasOwnProperty("designation")){
    Obj.desigantion = "Softwere Developer"
}  // ise hum ye push kr skte h new key pair


// console.log(Obj.age);
// Obj.sayHi()
// console.log(Obj.Address.city, Obj.Address.country);
// console.log(Obj["Address"] ["city"]);
// console.log(typeof Obj);


const NObj = {
    name : "Shubham",
    age : 0,
    isParesentObj : true
}

if(NObj.age){  // Yaha Value change is liye ho gye h kyoki  0 Is a Flasey Value or boj m false value ko vhange kiya ja skta h oringal value ke sath 

}

else {
    NObj.age = 39
}

console.log(NObj);




