function sortZeroTwoOne(arr) {
  let count0 = 0, count1 = 0, count2 = 0;
  
  // Count 0s, 1s, and 2s
  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  
  let idx = 0;
  // Place all 0s
  for (let i = 0; i < count0; i++) arr[idx++] = 0;
  // Place all 2s
  for (let i = 0; i < count2; i++) arr[idx++] = 2;
  // Place all 1s
  for (let i = 0; i < count1; i++) arr[idx++] = 1;
  
  return arr;
}
let arr = [1, 2, 0, 2, 0, 1, 0, 1, 0, 2, 1, 0];
console.log(sortZeroTwoOne(arr))