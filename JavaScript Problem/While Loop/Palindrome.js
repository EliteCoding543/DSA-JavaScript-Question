let num = 121;
let CopyNum = num;
let rev = 0;

while(num > 0){
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}

console.log(rev);

/// Now Check If Num Is Palinrome Or Not/

if(CopyNum === rev){
    console.log("Number is Palindrome")
}

else {
    console.log("Not Palindrome")
}
