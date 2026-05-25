function sortStringArray(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndx = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndx]){
                minIndx = j;
            }
        }

        if(minIndx !== i){
            [arr[i], arr[minIndx]] = [arr[minIndx], arr[i]]
        }
    }

    return arr;
}

console.log(sortStringArray(["ant", "xant", "mant", "rent"]));