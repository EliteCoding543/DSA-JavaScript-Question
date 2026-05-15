function countPairs(arr, target) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < arr.length - 1; i++) {
    let complement = target - arr[i];

    // If the complement exists in the map, add its frequency to our count
    if (map.has(complement)) {
      count += map.get(complement);
    }

    // Store the frequency of the current number in the map
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return count;
}
console.log(countPairs([1, 2, 5, 1, 3], 6));