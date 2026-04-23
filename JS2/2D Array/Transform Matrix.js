let arr = [
  [1, 2, 3],
  [4, 5, 6]
];

let result = [];

// column loop (outer)
for (let j = 0; j < arr[0].length; j++) {
  result[j] = [];

  // row loop (inner)
  for (let i = 0; i < arr.length; i++) {
    result[j][i] = arr[i][j];
  }
}

console.log(result);