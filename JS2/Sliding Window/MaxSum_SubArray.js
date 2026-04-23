let arr = [1, 2, 3, 4, 5]
let k = 3

function maxSum(arr, k){
    let windowSum = 0;

    // Step -1 window ka sum
    for(let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum;
    // Step - 2 Sliding Window Start

    for(let i = k; i < arr.length; i++){
        windowSum = windowSum + arr[i] - arr[i - k];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum
}

console.log(maxSum(arr, k));