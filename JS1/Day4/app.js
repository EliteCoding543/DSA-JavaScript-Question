//  If Else If Ladder
var marks = 89;

// if Invaild Input value than print "Invaild Input"
// 90-100 => Grade A
// 80-89 => Grade B
// 70-79 => Grade C
// 60-69 => Grade D
// below 60 => Grade Fail
 
if (marks > 100 || marks < 0) {
    console.log("Invaild Input");
}
else if (marks >= 90) {
    console.log("Grade A");
} 
else if (marks >= 80) {
    console.log("Grade B");
} 
else if (marks >= 70) {
    console.log("Grade C");
} 
else if (marks >= 60) {
    console.log("Grade D");
} 
else {
    console.log("Grade Fail");
}


// Check Last Digit Even 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  n = Number(n);

  let lastDigit = n % 10;

  if (lastDigit % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  rl.close();
});

// Quadrant Check

  let box1 = input[0];
  let box2 = input[1];

  if (box1 > 0 && box2 > 0) {
    console.log(1);
  } else if (box1 < 0 && box2 > 0) {
    console.log(2);
  } else if (box1 < 0 && box2 < 0) {
    console.log(3);
  } else if (box1 > 0 && box2 < 0) {
    console.log(4);
  }

  rl.close();


