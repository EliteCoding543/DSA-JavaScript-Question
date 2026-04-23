let arr = [2, 3, 4, 5, 6, 7, 8];

let newArr = [];

let max = -Infinity;
let min = Infinity;

for(let i = 0; i < arr.length; i++){
    
    let val;

    if(arr[i] % 2 === 0){
        val = arr[i] - 1;   // even
    } else {
        val = arr[i] + 1;   // odd
    }

    newArr.push(val);

    // max min same loop me
    if(val > max){
        max = val;
    }
    if(val < min){
        min = val;
    }
}

let diff = max - min;

console.log("New Array:", newArr);
console.log("Max:", max);
console.log("Min:", min);
console.log("Difference:", diff);