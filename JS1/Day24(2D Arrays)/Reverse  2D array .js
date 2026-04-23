let arr = [[1, 2], [3, 4]]; 
// Output :=  [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1] ]

for(let item of arr){
    let start = 0;
    let End = item.length - 1;
    while(start < End){
        let temp = item[start];
        item[start] = item[End];
        item[End] = temp;
        
        start++;
        End--
    }
}

console.log(arr)

// Har element reeverse and 

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// // 1. Main array reverse karna (swap se)
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   start++;
//   end--;
// }

// 2. Har inner array ko reverse karna (swap se)
for (let item of arr) {
  let i = 0;
  let j = item.length - 1;

  while (i < j) {
    let temp = item[i];
    item[i] = item[j];
    item[j] = temp;

    i++;
    j--;
  }
}

console.log(arr);
