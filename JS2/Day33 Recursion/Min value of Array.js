function findMin(arr){
    function helper(i){
      if(i == arr.length - 1){

          return arr[i];
      }

      let MinValue = helper(i + 1);
      return Math.min(arr[i], MinValue);
    }

    return helper(0)
}

console.log(findMin([5, 6, 2, 8, 9, 10]))

//  Without Helper function same code 

function findMin(arr, i = 0, min = Infinity) {
   if(i === arr.length) {
       return min;
   }
   min = Math.min(min, arr[i]);
   return findMin(arr, i + 1, min);
}

console.log(findMin([5, 4, 0, 6, -8, 67])); // Output: -8
