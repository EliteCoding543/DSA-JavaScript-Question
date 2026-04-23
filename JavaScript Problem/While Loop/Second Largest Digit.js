let num = 56789;
let firstMaxNum = -Infinity;
let SecondMaxNum = -Infinity;
while(num > 0){
    let lastDigit = num % 10
    if(lastDigit > firstMaxNum){
         SecondMaxNum = firstMaxNum
         firstMaxNum = lastDigit
    }

    else if(lastDigit > SecondMaxNum && lastDigit < firstMaxNum){
        SecondMaxNum = lastDigit
    }
    num = Math.floor(num / 10)
}
console.log(firstMaxNum);
console.log(SecondMaxNum)

