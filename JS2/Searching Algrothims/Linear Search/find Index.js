function FindIndx(arr, target){
    let indx = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            indx = i;
            return indx
        }
    }

    return indx
}

console.log(FindIndx([5, 1, 8, 21, 7, 12, 3], 12))