function finMax(arr){
    let Max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i]
        }
    }

    return Max
}

console.log(finMax([1, 5, 19, 25, 35]));