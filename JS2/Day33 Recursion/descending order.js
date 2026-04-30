function SortedArr(arr, i){
  if(i === arr.length-1) return true;
  
  if(arr[i] < arr[i + 1]) return false;

    return SortedArr(arr, i + 1);
  
}

console.log(SortedArr([1, 2, 3, 4], 0));
console.log(SortedArr([4, 3 ,2 ,1], 0));