let arr = [1, 3, 3];

function minRotated_2(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        mid = Math.floor((start + end)/ 2);

        if(arr[mid] > arr[end]){
            start = mid + 1;
        }

        else if(arr[mid] < arr[end]){
            end = mid;
        }

        else {
            end--
        }
    }

    return arr[start];
}

console.log(minRotated_2(arr));