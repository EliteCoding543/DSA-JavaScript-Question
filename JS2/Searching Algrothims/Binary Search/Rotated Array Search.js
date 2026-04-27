// search in Roated Sorted Array accensing Order : Distinct value : [3, 4, 5, 6, 7, 0, 1, 2]
// Accesding Order : [0, 1, 2, 3, 4, 5, 6] Binary 

let arr = [4,5,6,7,0,1,2]
let target = 0;

function roatedArray(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let indx = -1
    
    while(start <= end){
        let mid = Math.floor((start + end)/ 2);
        if(arr[mid] === target){
            indx = mid;
            return indx
        }

        if(arr[start] <= arr[mid]){
            if(arr[start] <= target && target <= arr[mid]){
                end = mid - 1
            }

            else {
                start = mid + 1
            }
        }

        else {
            if(arr[mid] <= target && target <= arr[end]){
                start = mid + 1
            }

            else {
                end = mid - 1
            }
        }
    }
    return indx
}

console.log(roatedArray(arr, target));
