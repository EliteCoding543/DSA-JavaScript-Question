
function linearSearch(arr, target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++        
        }
        
    }
       return count;
}

console.log(linearSearch([2, 4, 2, 8, 10,], 2));