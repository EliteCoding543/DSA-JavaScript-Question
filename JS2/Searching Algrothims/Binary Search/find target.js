function BinarySearchIndex(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        midValue = Math.floor((start + end)/ 2);

        if(arr[midValue] === target){
            return midValue;
        }

        else if(arr[midValue] < target){
            start = midValue + 1
        }

        else {
            end = midValue - 1
        }
    }

    return -1;
}

console.log(BinarySearchIndex([-1, 0, 3, 4, 5, 9,], 3)); // Odd Size Arr
console.log(BinarySearchIndex([-1, 0, 3, 5, 9, 12], 0)); // even Size Arr