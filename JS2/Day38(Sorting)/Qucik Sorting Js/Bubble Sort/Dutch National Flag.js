function sortZeroTwoOne(arr) {
  let low = 0, mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid], increment low and mid
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      // Swap arr[mid] and arr[high], decrement high
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      // arr[mid] === 1, just move mid
      mid++;
    }
  }
  return arr
}
console.log(sortZeroTwoOne([2,0,2,1,1,0]))