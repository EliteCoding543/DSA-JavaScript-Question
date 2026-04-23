let arr = [2,5,8,11,14];

let Oddsum = 0;
let EvenSum = 0;
let OddCount = 0;
let TotalSum = 0;

for(let item of arr){

  TotalSum += item;   // total sum sabka

  if(item % 2 == 0){
    EvenSum += item;   // Even ka sum    
  }
  else{
    Oddsum += item;  // Odd ka sum      
    OddCount++;     // Odd number ka count     
  }
}

console.log("Even sum:", EvenSum);
console.log("Odd sum:", Oddsum);
console.log("Odd count:", OddCount);
console.log("Total sum:", TotalSum);
