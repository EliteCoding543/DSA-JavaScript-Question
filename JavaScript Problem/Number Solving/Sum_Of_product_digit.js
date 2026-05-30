function sumOfProductOfDigits(n1, n2) {
let sum = 0

while(n1 > 0 && n2 > 0){
    let lastDigit1 = n1 % 10;
    let lastDigit2 = n2 % 10;
    sum += lastDigit1 * lastDigit2

    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
}
  return sum
}

console.log(sumOfProductOfDigits(123, 456));