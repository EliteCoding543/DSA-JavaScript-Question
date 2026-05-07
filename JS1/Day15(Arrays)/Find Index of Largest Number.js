let arr = [1, 2, 7, 4, 10, 6 ,5, 8, 3, 19];

function FindIndxOfLargest(arr){
    let maxElement = -Infinity;
    let indxOf = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxElement){
            maxElement = arr[i]
            indxOf = i;
        }
    }

    return indxOf;
}

console.log(FindIndxOfLargest(arr));