let sum = 0;
for(let num = 10; num <= 30; num++){
    if(num % 2 === 0){
        sum = sum + num;
    }
}

console.log(sum);



// Check Number is Factorial Or not 

let fact = 1;
for(let i = 1; i <= 10; i++){
    fact = fact * i;
}

console.log("This Factorial Number is: ", fact);


// Check Factorial By Using Function

function CheckFact(num1){
    let fact = 1;
      for(let i = 1; i <= num1; i++){
        fact *= i;
      }
      console.log(fact);
      
}

CheckFact(10);

//  Percent Find Of value 

let percent = 13;
let salary = 136;
let Newpercent = salary / 100 * percent;
Newpercent = salary - Newpercent;
console.log("Amount Percent is :", Newpercent);
