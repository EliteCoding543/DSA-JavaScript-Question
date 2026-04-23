let num = 18676;
let max = 0;

while(num > 0){
    let lastDigit = num % 10;
    if(lastDigit > max){
        max = lastDigit
    }
    num = Math.floor(num / 10)
}

console.log(max)