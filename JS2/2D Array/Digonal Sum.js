function DiagonalSum(mat) {
  let primarySum = 0;
  let secondarySum = 0;
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    primarySum += mat[i][i];
    secondarySum += mat[i][n - 1 - i];
  }

  return [primarySum, secondarySum];
}

console.log(DiagonalSum([
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
]));