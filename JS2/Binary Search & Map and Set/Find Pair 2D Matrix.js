function findPairs(array1, array2, x) {
  let pairs = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] + array2[j] === x) {
        pairs.push([array1[i], array2[j]]);
      }
    }
  }
  return pairs.length > 0 ? pairs : -1;
}

console.log(findPairs([1, 2, 4, 5, 7] , [5, 6, 3, 4, 8], 9))