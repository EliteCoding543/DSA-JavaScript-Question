function lastOccurrence(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while(start <= end){
        let midValue = Math.floor((start + end) / 2);

        if(arr[midValue] === target){
            result = midValue;      // store answer
            start = midValue + 1;     // move right
        }
        else if(arr[midValue] < target){
            start = midValue + 1;
        }
        else {
            end = midValue - 1;
        }
    }

    return result;
}

console.log(lastOccurrence([1, 2, 2, 2, 3], 2)); // 3