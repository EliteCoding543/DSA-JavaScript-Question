function isPairSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [arr[left], arr[right]];
        }
        else if(sum > target){
            right--;
        }
        else {
            left++;
        }
    }
    return false;
}

console.log(isPairSum([1, 2, 3, 4, 5, 6], 6));   // [1, 5]
