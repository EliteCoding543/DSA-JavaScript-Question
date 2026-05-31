let arr = [1, 5, 3, 4, 2];
let target = 2;

function CountPairDiff(arr, target){

    arr.sort((a, b) => a - b);

    let count = 0;
    let start = 0;
    let end = 1;

    while(end < arr.length){

        let diff = arr[end] - arr[start];

        if(diff === target){
            count++;
            start++;
            end++;
        }

        else if(diff < target){
            end++;
        }

        else{
            start++;
        }

        // same pointer avoid
        if(start === end){
            end++;
        }
    }

    return count;
}

console.log(CountPairDiff(arr, target));