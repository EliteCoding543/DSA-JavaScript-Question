function SumOfArray(arr, sum){
    let target = 10;
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
         sum += arr[left] + arr[right]
         if(sum === target){
            return "YES"
         }

         else if(sum > target){
            right--
         }

         else {
            left++
         }
    }

    return "No"
}

console.log(SumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));