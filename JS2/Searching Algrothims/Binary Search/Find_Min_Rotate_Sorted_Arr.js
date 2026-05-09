let arr = [3,4,5,1,2];

function findMinRotated(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);

        // minimum right side me hai
        if(arr[mid] > arr[end]){
            start = mid + 1;
        }

        // minimum left side me hai (including mid)
        else{
            end = mid;
        }
    }

    return arr[start];
}

console.log(findMinRotated(arr));