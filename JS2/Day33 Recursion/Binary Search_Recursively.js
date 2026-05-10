function searchRecursively(arr, tar, start, end){
       function helper(arr, tar, start, end){
           if(start <= end){
            let mid = Math.floor((start + end)/ 2);

            if(arr[mid] === tar){
                return mid;
            }

            if(arr[mid] >= tar){
                return helper(arr, tar, start, mid - 1)
            }

            else {
                return helper(arr, tar, mid + 1, end)
            }   
           }

           return -1;
       }
    return helper(arr, tar, 0, arr.length - 1);
}

console.log(searchRecursively([1, 2, 3, 4, 5, 6, 7], 9));