let arr = [10, 5, 8, 20, 15];

let firstLargest = -Infinity;
let secondLargest = -Infinity; // Its handle the - Value also 

for(let item of arr){

    if(item > firstLargest){
        secondLargest = firstLargest;
        firstLargest = item;
    }
    else if(item > secondLargest && item !== firstLargest){
        secondLargest = item;
    }
}

console.log("First largest:", firstLargest);
console.log("Second largest:", secondLargest);
