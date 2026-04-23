function QucikSort(arr){
    
     if(arr.length == 0 || arr.length == 1){
        return arr
     }

     let pivotIndx = arr[arr.length - 1];
     let left = []
     let right = []

     for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] <= pivotIndx){
            left.push(arr[i])
        }

        else {
            right.push(arr[i])
        }
     }

     let sortedLeft = QucikSort(left);
     let sortedRight = QucikSort(right);
     return [...sortedLeft, pivotIndx, ...sortedRight];
}

console.log(QucikSort([1, 6, 7, 8, 2, 4, 5]));