let arr = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
]
for(let i = 0; i < arr.length; i++){
    let row = " ";
    for(let j = 0; j < arr[i].length; j++){
        row += arr[i][j] + ""
    }

    console.log(row)
}