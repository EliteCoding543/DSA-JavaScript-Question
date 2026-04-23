function removeDublicate(arr){
    let slow = 0;
    for(let fast = 1; fast < arr.length; fast++){
        if(arr[fast] !== arr[slow]){
            slow++;
            arr[slow] = arr[fast]
        }
    }

    return arr.slice(0, slow+1)
}

console.log(removeDublicate([2,2, 2, 2, 3, 4]));