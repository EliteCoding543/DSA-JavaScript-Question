function sumOfArray(arr, i){
    if(i == arr.length) return 0;

    return arr[i] + sumOfArray(arr, i + 1)
}

console.log(sumOfArray([1, 2, 3, 4, 5], 0)); 