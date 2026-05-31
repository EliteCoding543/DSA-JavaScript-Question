let arr = [2,1,1,1,2,3];
let k = 4;

function longestSubArr(arr, k){
    let left = 0;
    let maxLength = 0;
    let sum = 0;

    for(let right = 0; right < arr.length; right++){
        sum += arr[right]
        
        while(sum > k){
            sum -= arr[left]
            left++
        }

        // Update Result 
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength
}

console.log(longestSubArr(arr, k));