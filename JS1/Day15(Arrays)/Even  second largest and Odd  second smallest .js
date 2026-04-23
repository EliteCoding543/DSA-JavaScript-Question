let arr = [2, 1, 3, 4, 5, 6, 7,, 8, 9];

// Even Number 
let firstMax = -Infinity;
let SecondMax = -Infinity;

//  Odd Number 

let firstMin = Infinity;
let SecondMin = Infinity;

for(let item of arr){
    if(item % 2 === 0){
        if(item > firstMax){
            SecondMax = firstMax;
            firstMax = item
        }

        else if(item > SecondMax && item !== firstMax){
            SecondMax = item
        }
    }

    else {
        if(item < firstMin){
            SecondMin = firstMin;
            firstMin = item
        }

        else if(item < SecondMin && item !== firstMin){
            SecondMin = item
        }
    }
}

//   Even first and second Largest Print 
console.log(`This is Even First Max ${firstMax}, and Second Max ${SecondMax}`);

// Odd Min value 
console.log(`This is Odd First Min ${firstMin}, and Second Min ${SecondMin}`);