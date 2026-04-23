let arr = [7, 2, 5, 1, 15]
let target = 5;
function findTargetIndex(arr, target){
    arr.sort((a, b) =>  a - b)
     arr.reverse()
  let indx = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
        indx = i;
        return indx
    }
  }

  return indx;
}

console.log(findTargetIndex(arr, target))