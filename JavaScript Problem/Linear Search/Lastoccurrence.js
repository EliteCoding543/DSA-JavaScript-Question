function lastOccurrence(arr, target){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            index = i;
        }
    }

    return index;
}

console.log(lastOccurrence([5, 10, 15, 10, 20], 10));