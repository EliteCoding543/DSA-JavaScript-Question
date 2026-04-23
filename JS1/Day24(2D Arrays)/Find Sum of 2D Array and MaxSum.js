let arr = [
  [10, 20, 30],
  [140, 50, 60],
  [70, 80, 90]
];

let MaxValue = -Infinity;
let rowNum = -1

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[j][i];
  }
  if (sum > MaxValue) {
    MaxValue = sum;
    rowNum = i;
  }
}

console.log(MaxValue);
console.log(rowNum)
