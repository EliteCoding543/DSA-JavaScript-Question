let num = 9887832;
let Min = num;
 
while(num > 0){
    let lastDigit = num % 10;
    num = Math.floor(num / 10)
    if(lastDigit < Min){
        Min = lastDigit
    }
}

console.log(Min);
