function longestSubArray(arr, k){
    let left = 0;
    let sum = 0;
    let maxLeng = 0;

    for(let right = 0; right < arr.length; right++){
        sum += arr[right];

        while(sum > k){
            sum -= arr[left];
            left++
        }

        maxLeng = Math.max(maxLeng, right - left + 1);
    }

    return maxLeng;
}

console.log(longestSubArray("abcdef"));