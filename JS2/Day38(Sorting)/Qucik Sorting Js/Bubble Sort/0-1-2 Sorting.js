function zero_one_two_sorting(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Agar 0 mile, toh use low wale pointer se swap karo
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } 
    else if (arr[mid] === 1) {
      // Agar 1 mile, toh wo apni sahi jagah (beech mein) hi hai
      mid++;
    } 
    else {
      // Agar 2 mile, toh use high wale pointer se swap karo
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
      // Yahan mid++ nahi karte kyunki swap ke baad high se jo 
      // element aaya hai use abhi check karna baki hai
    }
  }
  return arr;
}

// Check karte hain
console.log(zero_one_two_sorting([2, 0, 1, 2, 0, 1, 0])); 
// Output: [0, 0, 0, 1, 1, 2, 2]