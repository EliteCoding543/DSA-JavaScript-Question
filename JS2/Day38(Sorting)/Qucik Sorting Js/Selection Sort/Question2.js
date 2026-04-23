let arr = [4, 11, 6, 2, 3, 8,];
function SelectionSorting(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let minIndex = i; //  Unsorted Part Index of 1 
        for(let j = i + 1; j < n; j++){ // j start i + 1 esliye h kyoki index 0 already chcek h 
             if(arr[j] < arr[minIndex]){
                minIndex = j;
             }
        }
        // Swapie Here ~
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

console.log(SelectionSorting(arr))