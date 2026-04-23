let count = 0;
for(let i = 1; i<= 100; i++){
    if(i % 2 === 1){
        console.log("This Number is Even:", i);
        count++
    }

    if(count === 5){
        break;
    }
    
}

//  Print the Prime Number Only 10 Number Print 
let StartPrime = 0;
for(let i = 2; i <= 100; i++){
    if(i % 2 === 0){
        console.log("This Number is Even:", i);
        StartPrime++ 
    }

    if(StartPrime === 10){
        break;
    }
}