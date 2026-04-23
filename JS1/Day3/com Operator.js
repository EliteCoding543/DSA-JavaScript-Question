//Compartion Operator
let a = 10;
let b = 20; 
console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true    

var CurrAge = 17;
var EligAge = 18;   
if (CurrAge >= EligAge) {
    console.log("You are eligible to vote");    
} else {
    console.log("You are not eligible to vote.");
}

//Logic Gate Operator And(&&) or(||)  not(!)
1. // AND Operator (&&)

//👉 Dono condition true honi chahiye

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

console.log("Shubham" == 50 && "Shubham" === "Shubham"); // false

2. // OR Operator (||)     
//👉 Koi bhi ek condition true honi chahiye
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No Office");
} else {
  console.log("Go to Office");
}
