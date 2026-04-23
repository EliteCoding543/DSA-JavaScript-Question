// 1. //
function printN(n){
    for(let i = 0; i <= n; i++){
        console.log(i);
        
    }
}

printN(20);

// 2. // Print number from N to 1 (Reverse)

function Reverse(n){
    for(let i = 20; i >= 1; i--){
        console.log(i);   
    }
}

Reverse(20);

// 3. // Print All Even Number from 1 to N

function PrintEven(n){
    for(let i = 2; i <= n; i++){
        if(i % 2 === 0){
            console.log("Number is Even", i);
            
        }
    }
}

PrintEven(10)

// 4 . Count How Many Even And Odd Number 

let odd = 0;
let even = 0;

let n = 10;

for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        even++;
    }

    else{
        odd++
    }
}

console.log("Even Number ", even);
console.log("Odd Number", odd);


// 5. Find Of Sum Number 

let sum = 0
function Sum(n){
    for(let i = 0; i <= n; i++){
          sum = sum + i;
          console.log(sum);
          
    }
}

Sum(10);

// 6 Find Factroial Number 

let fact = 1;
for(let i = 1; i <= 5; i++){
    fact = fact * i;
     console.log(fact);
     
}

// 7 Multiplication

let Multiplication = 5;
for(let i = 1; i <= 10; i++){
    console.log("5 x "+ i + "=" + Multiplication * i);
    
}

// Reverse Number using While Number and check Palindorme 
let num = 14521;
let newNum = num;
let reverseNum = 0;
while(num != 0){
    let rem = num % 10
    reverseNum = (reverseNum * 10) + rem
    num = Math.floor(num / 10)
}

console.log(reverseNum);

if(newNum === reverseNum){
    console.log("Is Palindrome");
}

else {
    console.log("Not Palindrome");  
}

 



// Find the largest  digit in a number

// let num = 1234567;
// let largest = 0; 

// while (num > 0) {
//     let digit = num % 10;   // last digit
//     if (digit > largest) {
//         largest = digit;
//     }
//     num = Math.floor(num / 10); // remove last digit
// }

// console.log("Largest digit is:", largest);
