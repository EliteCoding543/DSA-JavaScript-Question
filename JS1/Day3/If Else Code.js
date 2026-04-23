// What is if else?

// if else ka use decision making ke liye hota hai.
// 👉 Condition true hui to if ka code chalega
// 👉 False hui to else ka code chalega

// 🧩 Basic Syntax

if (condition) {
  // jab condition true ho
} else {
  // jab condition false ho
}

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Even Odd Check
let n = 7;

if (n % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


let num = 5;

if (num > 2) {
  console.log("You entered More");
} else {
  console.log("You entered Less");
}
