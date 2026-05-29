function findSubArray(arr){
    let total = 0;
    let prefixSum = 0;

    myMap = new Map();
     // prefix sum 0 ek baar already present
    myMap.set(0, 1);

    for(let i = 0; i < arr.length; i++){
        prefixSum += arr[i];
        // Agar Prefixsum Pahle se hai ?
        if(myMap.has(prefixSum)){
            total += myMap.get(prefixSum);
            myMap.set(prefixSum, myMap.get(prefixSum) + 1);
        }

        else {
            myMap.set(prefixSum, 1)
        }
    }

    return total;
}

console.log(findSubArray([6, -1, -3, 4, -2, 2, 4, 6, -12, 7]));