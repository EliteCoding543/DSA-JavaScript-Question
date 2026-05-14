let arr = [1, 2, 4, 5, 6, 8];

let MySet = new Set(arr)
let sum = 0

for(let value of MySet){
    sum += value;
}

console.log("Total Of Sum My Set :", sum);