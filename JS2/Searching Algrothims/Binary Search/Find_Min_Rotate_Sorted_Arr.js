let arr = [3, 4, 5, 6, 1, 2];

function findMaxElements(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        mid = Math.floor((start + end)/ 2);

        if(arr[mid] > arr[end]){
            start = mid + 1
        }

        else {
            end = mid;
        }
    }

    return arr[start]
}

console.log(findMaxElements(arr));