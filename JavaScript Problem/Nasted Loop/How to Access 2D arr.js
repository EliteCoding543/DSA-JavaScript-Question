let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0;
for(let row = 0; row < arr.length; row++){
    for(let col = 0; col <= row; col++){
        sum += arr[row][col];
    }
}
console.log("Total of Sum Arr is :", sum)
// console.log(arr[0][0])
// console.log(arr[1][1])
// console.log(arr[2][2])

// console.log(arr[0][2])
// console.log(arr[1][1])
// console.log(arr[2][0])