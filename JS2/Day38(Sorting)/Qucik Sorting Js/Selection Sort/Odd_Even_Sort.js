let arr = [7, 6, 8, 5, 4, 9];

function oddEvenSort(arr){
    // Find Even Odd 
    let result = []
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i])
        }
        else{
            result.push(arr[i])
        }
    }
    // Now Selection Sorting 

    for(let i = 0; i < result.length; i++){
        let minIndex = i;
          for(let j = i + 1; j < result.length; j++){
            if(result[j] < result[minIndex]){
                minIndex = j;
            }
          }
          [result[i], result[minIndex]] = [result[minIndex], result[i]]
    }
    return result;
}

console.log(oddEvenSort(arr));