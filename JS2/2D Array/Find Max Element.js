let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let MaxNum = -Infinity;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > MaxNum){
            MaxNum = arr[i][j]
        }
    }   
}
console.log("Max Number of Matrix Is :", MaxNum)

//  Max Row Wies Array

// let arr = [
//   [3, 5, 1],
//   [7, 23, 8],
//   [4, 6, 9]
// ];

for(let i = 0; i < arr.length; i++){
  let max = arr[i][0];
  for(let j = 0; j < arr[i].length; j++){
    if(arr[i][j] > max){
      max = arr[i][j]
    }
  }
  
  console.log(`Max Number In Row wies ${i} = `, max);
}

