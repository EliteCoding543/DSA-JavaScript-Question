function sumWithCallback(arr, callback) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += callback(arr[i]);
  }
  return totalSum;
}

function multiplyByTwo(num) {
  return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumWithCallback(numbers, multiplyByTwo));