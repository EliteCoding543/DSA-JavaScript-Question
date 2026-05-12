function removeElements(arr, value){
    let k = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== value){
            arr[k] = arr[i]
            k++
        }
    }

    return k;
}

console.log(removeElements([0,1,2,2,3,0,4,2], 2))