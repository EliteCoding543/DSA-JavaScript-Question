let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = arr.length;
let m = arr[0].length;

let top = 0;
let bottom = n - 1;
let left = 0;
let right = m - 1;

let result = [];

while (top <= bottom && left <= right) {

  // 1. Top row
  for (let i = left; i <= right; i++) {
    result.push(arr[top][i]);
  }
  top++;

  // 2. Right column
  for (let i = top; i <= bottom; i++) {
    result.push(arr[i][right]);
  }
  right--;

  // 3. Bottom row
  if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      result.push(arr[bottom][i]);
    }
    bottom--;
  }

  // 4. Left column
  if (left <= right) {
    for (let i = bottom; i >= top; i--) {
      result.push(arr[i][left]);
    }
    left++;
  }
}

console.log(result.join(" "));