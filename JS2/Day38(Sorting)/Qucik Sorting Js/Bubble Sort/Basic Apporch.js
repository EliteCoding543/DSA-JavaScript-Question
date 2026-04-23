let arr = [4, 1, 5, 2, 3];
function bubbleSorting(arr){
  let n = arr.length;
  for(let i = 0; i < n - 1; i++){
    let isSwap = false;
     for(let j = 0; j < n - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSwap = true;
      }
     }
    if(!isSwap){
        break; // Alreday Sorted
    }
  }
  return arr;
}

console.log(bubbleSorting(arr));