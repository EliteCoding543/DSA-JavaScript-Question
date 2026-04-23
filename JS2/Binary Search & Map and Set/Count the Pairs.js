function Count_Pairs(arr, target){
   let left = 0;
   let right = arr.length - 1;
   let count = 0;

   while(left < right){
    let sum = arr[left] + arr[right]

    if(sum === target){
        count++

        left++
        right--
    }

    else if(sum > target){
        right--
    }

    else {
        left++
    }

   }

   return count;
}

console.log(Count_Pairs([1, 2, 3, 4, 5 , 6], 7));