let arr = [2, 3, 4, 5, 6, 7,  9];
//  Even Count And Sum
let evensum = 0;
let evenCount = 0;

//  Odd Count And Sum 
let oddSum = 0;
let oddCount = 0;

for(let item of arr){
    if(item % 2 === 0){
        evensum += item
        evenCount++
    }

    else {
        oddSum += item
        oddCount++
    }
}

let evenAvg = evensum / evenCount;
let oddAvg = oddSum / oddCount;

console.log("Total of Avrage of Even :", evenAvg);
console.log("Total Of Avrage of Odd :", oddAvg)