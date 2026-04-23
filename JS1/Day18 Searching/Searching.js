let arr = [2, 5, 22, 55,67,88]
let FindEle = 22;  // find arr of indexx

let ans = -1

for(let i = 0; i < arr.length; i++){
    if(arr[i] === FindEle){
        ans = i
        break
    }
}

console.log(ans);

// Using function 
 
function LinearSearch(arr, target){
    let ans = -1

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            ans = i;
            break
        }
    }

    return ans;
}

console.log(LinearSearch([2, 34, 56, 78, 1,23], 78)); 

// Method 2 

function LinearSearch2(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return true;
        }
    }

    return false;
}

console.log(LinearSearch2([12, 34, 1, 2,5,6], 9)); 


