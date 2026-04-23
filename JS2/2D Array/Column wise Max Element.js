let arr = [
  [3, 5, 14],
  [7, 23, 8],
  [41, 6, 9]
];

let result = [];
for(let j = 0; j < arr[0].length; j++){
    let MaxNum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i][j] > MaxNum){
            MaxNum = arr[i][j]
        }
    }

    result.push(MaxNum)
}

console.log(result);