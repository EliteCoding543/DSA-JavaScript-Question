let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = arr.length;
for(let i = 0; i < n; i++){
    for(let j = i; j < n; j++){
        [arr[i][j], arr[j][i] = arr[j][i], arr[i][j]]
    }

    // reverse now
    for(let i = 0; i < n; i++){
        arr[i].reverse()
    }
}

console.log(arr)