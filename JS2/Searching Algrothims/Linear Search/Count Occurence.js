let arr = [2, 5, 2, 7, 2, 9];
let target = 2;
function CountOccuren(arr, target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === target){
          count++
       }
    }

    return count;
}

console.log(CountOccuren(arr, target));