let num = 654321;
let count = 0;

while(num > 0){
    num = Math.floor(num / 10);
    count++
} // using itrative 

console.log(count)

// using recursive 
function digitCount(n){
    if(n === 0) return 0;

  return 1 + digitCount(Math.floor(n / 10));
}

console.log(digitCount(1111178))