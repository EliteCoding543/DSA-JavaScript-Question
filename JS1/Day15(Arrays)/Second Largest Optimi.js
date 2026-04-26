let arr = [64, 2, 12, 220, 11];

function secondLargest(arr){
    if(arr.length < 2){
        return "Not enough elements";
    }

    let firstLargest = -Infinity;
    let secLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];

        if(num > firstLargest){
            secLargest = firstLargest;
            firstLargest = num;
        }

        else if(num > secLargest && num !== firstLargest){
            secLargest = num;
        }
    }

        if(secLargest === -Infinity){
            return "No second Largest Element"
        }
   
    return {firstLargest, secLargest}
}

console.log(secondLargest(arr));