function indexAfterSort(arr, target) {
    let indx = -1;
  for(let i = 0; i < arr.length - 1; i++){
     for(let j = 0; j < arr.length - 1- i; j++){
        if(arr[j] > arr[j + 1]){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp
        }
        if(arr[i] === target){
            indx = i;
        }
     }
  }
  return indx;
}

console.log(indexAfterSort([6, 27, 2, 3, 1, 5], 5));