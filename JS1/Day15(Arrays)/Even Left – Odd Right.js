let arr = [2, 3, 4, 6, 5, 7, 1, 12]

let startIndex = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
        [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
        startIndex++
    }
}

console.log(arr)


// Second Method

// let arr = [2, 3, 4, 6, 8, 9, 7, 12]

// let Even = []
// let odd = []

// for(let num of arr){
//   if(num % 2 !=== 0){
//     Even.push(num)
//   }
  
//   else {
//     odd.push(num)
//   }
  
// }

// let result = [... Even, ... odd]
// console.log(result)
