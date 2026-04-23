function SecondMax(arr){
    let FirstMax, Smax;
    if(arr[0] > arr[1]){
        FirstMax = arr[0]
        Smax = arr[1]
    } 
    else {
        FirstMax = arr[1]
        Smax = arr[0]
    }

    // Now I Check Condition Using For Looop

    for(let i = 2; i < arr.length; i++){
        if(arr[i] > FirstMax){
            Smax = FirstMax
            FirstMax = arr[i]
        }

        else if(arr[i] > Smax && arr[i] < FirstMax){
            Smax = arr[i]
        }
    }

    return {FirstMax, Smax}
}

let result = SecondMax([78, 78, 78,78,78]);

console.log("First Largest:", result.FirstMax);
console.log("Second Largest:", result.Smax);