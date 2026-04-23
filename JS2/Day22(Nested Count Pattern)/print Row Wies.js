let arr = [[1, 2], [3, 4]];

for(let i = 0; i < arr.length; i++){
    let row = "";
    for(let j = 0; j < arr.length; j++){
        row += arr[i][j] + " "
    }

    console.log(row)
}