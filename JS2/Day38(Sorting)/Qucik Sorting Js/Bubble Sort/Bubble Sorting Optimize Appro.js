let arr = [5, 3, 8, 4, 2];

function bubbleSort(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        let swapped = false;  // ✅ reset every pass

        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if(!swapped) break;  // ✅ early exit
    }

    return arr;
}

console.log(bubbleSort(arr));