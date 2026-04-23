function FindLargestNum(arr){
    let Max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i]
        }
    }

    // Step 2 Count Value 
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === Max){
            count++
        }
    }

    return {Max, count}
}

console.log(FindLargestNum([78,15,2,3,78,9,78,78]));

// Can you do it in one loop?  : Yes

function findLargestCount(Arr){
    let MaxNum = Arr[0]
    let Count = 1

    for(let i = 1; i < Arr.length; i++){
        if(Arr[i] > MaxNum){
            MaxNum = Arr[i]
            Count = 1
        }
        else if(Arr[i] === MaxNum){
            Count++
        }
    }

    return {MaxNum, Count}
}

console.log(findLargestCount([78,15,2,3,78,9,78,78]));

