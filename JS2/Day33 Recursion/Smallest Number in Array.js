function findMin(arr, i, n){
    if(i === n - 1){
        return arr[i];
    }

    return Math.min(arr[i], findMin(arr, i + 1, n));
}

console.log(findMin([8, 2, 5, 7, 8], 0, 5));