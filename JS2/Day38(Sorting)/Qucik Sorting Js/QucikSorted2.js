function QucikSort(arr){
    
     if(arr.length == 0 || arr.length == 1){
        return arr
     }
     
     let pivotIndex = Math.floor(Math.random() * arr.length)
     let pivot = arr[pivotIndex];
     let left = []
     let right = []

     for(let i = 0; i < arr.length - 1; i++){
        if(i == pivotIndex) continue
            if(arr[i] <= pivot){
                left.push(arr[i])
            }

        else {
            right.push(arr[i])
        }
     }

     let sortedLeft = QucikSort(left);
     let sortedRight = QucikSort(right);
     return [...sortedLeft, pivot, ...sortedRight];
}

console.log(QucikSort([1, 6, 7, 8, 2, 4, 5]));