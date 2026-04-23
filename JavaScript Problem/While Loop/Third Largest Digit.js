let num = 52049;
let firstMaxNum = -Infinity;
let SecondMaxNum = -Infinity;
let ThirdMaxNum = -Infinity;
while(num > 0){
    let lastDigit = num % 10
    if(lastDigit > firstMaxNum){
         ThirdMaxNum = SecondMaxNum
         SecondMaxNum = firstMaxNum
         firstMaxNum = lastDigit
    }

    else if(lastDigit > SecondMaxNum && lastDigit < firstMaxNum){
        ThirdMaxNum = SecondMaxNum
        SecondMaxNum = lastDigit
    }

    else if(lastDigit > ThirdMaxNum && lastDigit < SecondMaxNum){
        ThirdMaxNum = lastDigit;
    }
    num = Math.floor(num / 10)
}
console.log(firstMaxNum);
console.log(SecondMaxNum);
console.log(ThirdMaxNum);


