let num = 153;
let OrignalNum = num;
let Armstrong = 0;
while(num > 0){
    let lastDigit = num % 10
    Armstrong += lastDigit**3
    num = Math.floor(num / 10) 
}
console.log(Armstrong);

if(OrignalNum == Armstrong){
    console.log("Number is Armstrong");
}

else {
    console.log("Not Armstrong")
}