let arr = [3, 7, 5, 7, 9];
let target = 7;
let indx = -1;
function firstOcc(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
        //    indx = i; // Last  Occ 

          return i;
        }
    }

    return indx;
}

console.log(firstOcc(arr, target));

//  Last Occurence ke liye sirf return keyword hata  do invoke return 

// function lastOcc(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             indx = i;
//         }
//     }

//     return -1
// }

// console.log(lastOcc(arr, target));

// Reveres Loop Same Apporch optimize

// let arr = [3, 7, 5, 7, 9];
// let target = 7;
// function lastOcc(arr, target){
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(arr[i] === target){
//             return i; // milte hi return (fast)
//         }
//     }
//     return -1;

// console.log(lastOcc(arr, target));

// console.log(lastOcc(arr, target));