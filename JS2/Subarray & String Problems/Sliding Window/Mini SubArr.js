let arr = [2, 1, 5, 1, 3, 2]
let k = 2

function minSum(arr, k){
    let windowSum = 0;

    // Step -1 window ka sum
    for(let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    minSum = windowSum;
    // Step - 2 Sliding Window Start
    for(let i = k; i < arr.length; i++){
        windowSum += arr[i] // new elemet add kro
        windowSum -=  arr[i - k]; // old element remove kro 

        minSum = Math.min(minSum, windowSum);
    }

    return minSum
}

console.log(minSum(arr, k));