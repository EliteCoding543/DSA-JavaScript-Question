let num = 10;
for(let i = 1; i < num; i++){
    console.log(num - i + 1) 
}   //  without condtion loop change print reverse number 

// while loop using 

// let i = 1;

// while(i <= num){
//     console.log(i)
//     i++
// }

// Find Number number is even or Odd nth Number 

let n = 10;
let max = 0;
for(let i = 2; i <= num; i++){
    if(i % 2 == 0) {
        if(i > max){
            max = i;
        }
    }

    
}
console.log("Max Number is :", max)