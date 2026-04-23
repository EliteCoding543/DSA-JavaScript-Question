// 1 Method Function 

function sayHi(name){
    console.log(`My Name Is ${name}`)
}

sayHi("Shubham Kashyap") // Call a Function

function sum(a , b){
    console.log(a + b);
    console.log(a * b);
    console.log(a - b);
    console.log(Math.floor(a / b));
}

sum(8, 3)

function fullName(firstname, lastname){
    console.log(`Welcome Back! ${firstname} ${lastname}`)
}

fullName("Shubham", "Kashyap");


function ToSum(){
    var a = Number(prompt(console.log("Enter The Value A:")));
    var b = Number(prompt(console.log("Enter The Value B"))
    ) // Number Value Ko Number m convert krega becouse prompt String Value Deta h esliye 

    // console.log(a + b);
    return a + b;
}

console.log(ToSum());

// Note : Every Js function Returns somethings

// Example => 

function testingReturn(){
    console.log("Hello");
    
    // return "Shivam";  Ya Function Bhi Return Ho skta h 
    return "Kese Ho ap"
}    

console.log(testingReturn());

// if you dont return anything from a fn() js will return undefiend.


// Function Expression => 2. Method

const abc = function (age, sub = "User") {
    console.log("Hello Ji My Name is Shubham My age :", age, sub);
}

abc(16, "BCA");
// console.log(abc);1



