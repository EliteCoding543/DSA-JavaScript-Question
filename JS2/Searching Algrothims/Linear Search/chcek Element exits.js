let arr = [4, 9, 1, 7, 3];
let target = 17;

function CheckExists (arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }

    return false
}

console.log(CheckExists(arr, target));