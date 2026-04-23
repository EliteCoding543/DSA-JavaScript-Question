function Power(base, exp){
    if(exp == 0) return 1;

    return base * Power(base, exp - 1);
}

console.log(Power(2, 3));

//  Sum of Digit In Recursion 

function digitOfSum(num){
    num = Math.abs(num) // edge case Handle - value

    if(num === 0) return 0;

    return (num % 10) + digitOfSum(Math.floor(num / 10));
}

console.log(digitOfSum(1234));