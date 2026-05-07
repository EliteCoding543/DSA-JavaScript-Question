let arr = [1, [2, [3, 4], 5], 6]
function flatenArr(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            let flat = flatenArr(arr[i]);

            for(let j = 0; j < flat.length; j++){
                result[result.length] = flat[j]
            } 
        } else {
                result[result.length] = arr[i]
            }
    }
    return result
}

console.log(flatenArr(arr));