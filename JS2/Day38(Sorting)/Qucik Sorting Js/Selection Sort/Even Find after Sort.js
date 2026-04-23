let arr = [3, 6, 2, 4, 8, 11, 7, 12, 9];
function sortedEven(arr){
    let Even = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            Even.push(arr[i])
        }
    }

    // Now Selction Sort Start 
    for(let i = 0; i < Even.length; i++){
        let minIndex = i;
        for(let j = i + 1; j <  Even.length; j++){
            if(Even[j] < Even[minIndex]){
                minIndex = j;
            }
        }

        [Even[i], Even[minIndex]] = [Even[minIndex], Even[i]];
    }

    return Even;
}

console.log(sortedEven(arr));