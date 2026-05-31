let arr = [2, 1, 5, 1, 3, 2]
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
        windowSum += arr[i] // new elemet add kro
        windowSum -=  arr[i - k]; // old element remove kro 

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum
}

console.log(maxSum(arr, k));