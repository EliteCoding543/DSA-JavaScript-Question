function findX(arr, n, x) {
  // write code here
  function helper(arr, i, str){
    if(i == arr.length){
      console.log(str)
      return
    }
      if(arr[i] == x){
        str += i + " "
      }
      helper(arr, i + 1, str)
  }

  helper(arr, 0, "");
}

console.log(findX([1, 2, 3, 4, 6], 5, 2));
