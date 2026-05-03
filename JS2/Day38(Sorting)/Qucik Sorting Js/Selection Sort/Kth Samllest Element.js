function kthSmallest(arr, k) {
  let n = arr.length;

  for (let i = 0; i < k; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr[k - 1];
}

// Example
let arr = [7, 10, 4, 3, 20, 15];
let k = 3;

console.log("Kth value is :", kthSmallest(arr, k)); // Output: 7