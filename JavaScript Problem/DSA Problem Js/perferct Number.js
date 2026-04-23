let num = 6;
let originalNum = num;
let sum = 0;

for(let i = 1; i < num; i++){
  if(num % i === 0){
    sum += i;
  }
}

console.log(sum === originalNum ? "Perfect Number" : "Not Perfect Number");