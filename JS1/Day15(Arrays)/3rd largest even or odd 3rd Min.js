let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// Even Check 
let FirstMax = -Infinity;
let SMax = -Infinity;
let ThirdMax = -Infinity;

// Odd Chcek

let firstMin = Infinity;
let sMin = Infinity;
let thirdMin = Infinity;

// For of loop iteration all Elements 

for(let item of arr){
    if(item % 2 === 0){
        if(item > FirstMax){
            ThirdMax = SMax;
            SMax = FirstMax;
            FirstMax = item;
        }
        else if(item > SMax && item !== FirstMax){
            ThirdMax = SMax;
            SMax = item
        }

        else if(item > ThirdMax && item !== SMax){
            ThirdMax = item
        }
    }


    else {
        if(item < firstMin){
            thirdMin = sMin;
            sMin = firstMin;
            firstMin = item
        }

        else if(item < sMin && item !== firstMin){
            thirdMin = sMin;
            sMin = item
        }

        else if(item < thirdMin && item !== sMin){
            thirdMin = item
        }
    }
}

console.log(`First Max : ${FirstMax}, Second Max ${SMax}, Third Max ${ThirdMax}`)
console.log(`First Min : ${firstMin}, Second Min ${sMin}, Third Min ${thirdMin }`)