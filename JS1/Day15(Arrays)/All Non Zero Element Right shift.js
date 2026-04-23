let arr = [1, 2, 0, 5, 0, 7, 0]

let startIndex = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
        startIndex++
    }
}

console.log(arr);
