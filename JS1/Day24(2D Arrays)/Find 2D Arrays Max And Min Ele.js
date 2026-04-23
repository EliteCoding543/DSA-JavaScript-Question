let arr = [[1, 44, -10, 0], [99, 6, 5, 23], [2, 4, 8, 19]];

// let Max = arr[0][0]; 
// let Min = arr[0][0];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > Max) Max = arr[i][j];
//     if (arr[i][j] < Min) Min = arr[i][j];
//   }
// }

// console.log("Maximum:", Max);
// console.log("Minimum:", Min);


/// Using For of looop 

let max = -Infinity;
let min = Infinity

for(let item of arr){ // Ye loop mera arr chcek krega 
    for(let value of item){ // ye arr ke value ko chcek krega
       if(value > max){
         max = value;
       }

       if(value < min){
        min = value;
       }
    }
}

console.log(max);
console.log(min);
