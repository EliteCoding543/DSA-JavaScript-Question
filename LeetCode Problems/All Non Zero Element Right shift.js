let arr = [1,3,0,0,12]

let startIndex = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
        startIndex++
    }
}

console.log(arr);
