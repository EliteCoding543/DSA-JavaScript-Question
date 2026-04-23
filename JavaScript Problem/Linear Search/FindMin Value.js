function findMin(arr){
    let minValue = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }

    return minValue
}

console.log(findMin([5, 8, 12, 14, 2]))