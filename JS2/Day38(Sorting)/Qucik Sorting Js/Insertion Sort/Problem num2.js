function insertionSort2(arr){
    for(let i = 1; i < arr.length; i++){
        let currentKey = arr[i];
        let prevElement = i - 1;

        while(prevElement >= 0 && arr[prevElement] > currentKey){
            arr[prevElement + 1] = arr[prevElement]
            prevElement--;

            console.log(`Pass ${i}`, arr)
        }

        arr[prevElement + 1] = currentKey;
    }

    return arr;
}
console.log("Final Sorted Array is : = ", insertionSort2([5, 3, 8, 6, 2]));