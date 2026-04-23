function alternateMatrixSum(mat, n) {

  let EvenSum = 0;
  let OddSum = 0;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){

      if((i + j) % 2 === 0){
        EvenSum += mat[i][j];
      }
      else{
        OddSum += mat[i][j];
      }

    }
  }

  console.log(OddSum);
  console.log(EvenSum);
}

alternateMatrixSum([
[1, 2, 3, 4],
[5, 6, 7, 8],
[1, 2, 3, 4],
[6, 7, 10, 8]
], 4);