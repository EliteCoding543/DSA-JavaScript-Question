// var start = 2
// var sum = 0;
// var n = 12;

// 	while(start <= n){
// 		if(start % 2 == 0){
// 			sum += start;
// 		}
// 		start++
// 	}
//         console.log(sum)

// Factorial Number Find 
var n = 5;
var start = 1;
  var Fac = 1;
  while( start <= n){
    Fac *= start;
    start++
  }
console.log(Fac)

// Calculate Power Without Built-in Method

var a = 7;
var b = 2;
var Power = 1;
var start = 1;

while (start <= b) {
  Power *= a;
  start++;
}

console.log(Power);

// Check Prime  

var n = 53;
var start = 2;
var isPrime = true;

while (start * start <= n) {
  if (n % start === 0){ 
    isPrime = false;
    break;
  }
  start++;
}
 
if (isPrime && n > 1) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is a prime number`);
}

// Equal Height 

function equalHeights(h1, h2, v1, v2) {
  if (v1 === v2) {
    return h1 === h2;
  }

  let numerator = h2 - h1;
  let denominator = v1 - v2;

  return numerator % denominator === 0 && numerator / denominator >= 0;
}


console.log(equalHeights(4, 2, 2, 4));
console.log(equalHeights(5, 4, 1, 6));



