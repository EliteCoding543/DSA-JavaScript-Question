let arr = [2, -3, -8, 5, -4, -9, 7];
let i = 0;
function negativeNum(arr, i){
let count = 0
   if(i === arr.length) return 0;

    return(arr[i] < 0 ? 1 : 0 ) + negativeNum(arr, i + 1)
}

console.log(negativeNum(arr, i));