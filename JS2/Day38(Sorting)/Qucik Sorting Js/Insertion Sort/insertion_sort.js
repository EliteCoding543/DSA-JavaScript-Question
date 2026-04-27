let arr = [4, 1, 5, 2, 3];
function insertionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        let currElemt = arr[i];
        let prevElemt = i - 1;

        while(prevElemt >= 0 && arr[prevElemt] > currElemt){
            arr[prevElemt + 1] = arr[prevElemt]
            prevElemt--
        }

        arr[prevElemt + 1] = currElemt;
    }

    return arr
}

console.log(insertionSort(arr)); 