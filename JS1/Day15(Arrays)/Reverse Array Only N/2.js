let arr = [10, 20, 30, 40]
let n = arr.length;
for(let i = 0; i < n/ 2; i++){
  let temp = arr[i]
  arr[i] = arr[n - 1- i];
  arr[n - 1 - i] = temp
}

console.log(arr)