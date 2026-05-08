let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
function singleElementSorted(arr){
    // Assume Single Element Edge case 
    if(arr.length === 1) return arr[0];
    
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        mid = Math.floor((start + end)/ 2);

        // Edge Case Handle 
        if(mid === 0 && arr[0] !== arr[1]) return arr[mid];
        if(mid === arr.length - 1 && arr.length - 1 !== arr.length - 2) return arr[mid];

        if(arr[mid - 1] !== arr[mid] && arr[mid] !== arr[mid + 1]){
            return arr[mid];
        }

        if(mid % 2 === 0){ // Even Case of Arr
             if(arr[mid - 1] === arr[mid]){
                end = mid - 1
             }

             else {
                start = mid + 1
             }
        }

        else { // Odd case Of Arr
            if(arr[mid - 1] === arr[mid]){
                start = mid + 1
            }

            else {
                end = mid - 1
            }
        }
    }
    return arr
}

console.log(singleElementSorted(arr));