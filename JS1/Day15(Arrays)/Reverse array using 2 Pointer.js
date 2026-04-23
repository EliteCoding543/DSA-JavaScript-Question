let arr  = [1, 2, 3, 4, 5, 6];

let start = 0;
let End = arr.length - 1;

while(start < End){
    let temp = arr[start];
    arr[start] = arr[End];
    arr[End] = temp
    start++;
    End--;
}

console.log(arr);
