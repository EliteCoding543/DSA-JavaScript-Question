let arr = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]
];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(i === 0 || i === arr.length - 1 || j === 0 || j === arr[i].length - 1){
            sum += arr[i][j];
        }  
    }   
}

console.log("Total Of Sum Matrix Boundary is :", sum);