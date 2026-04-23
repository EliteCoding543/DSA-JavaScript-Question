let num = 112334989;
let frequency = {};

while(num > 0){
    lastDigit = num % 10;

    frequency[lastDigit] = (frequency[lastDigit] || 0) +1;
    num = Math.floor(num / 10)
}

console.log(frequency)