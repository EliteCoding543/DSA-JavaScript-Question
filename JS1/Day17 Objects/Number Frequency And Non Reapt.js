let num = 1134455;

let freq = {};

while(num > 0){
    let LastDigit = num % 10;
    freq[LastDigit] = (freq[LastDigit] || 0) + 1;

    num = Math.floor(num / 10)
}

//  Now Non Reapt Number 

for(let item in freq){
   if(freq[item] === 1){
    console.log("Non Reapet Number is :", item)
    break;
   }
}

console.log(freq)