let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

let sum = 0;
let n = arr.length;

for(let i = 0; i < n; i++){
  sum += arr[i][n - 1 - i];
}

console.log(sum);