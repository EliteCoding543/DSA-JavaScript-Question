// function maxArr(arr){
//    let max = arr[0]
//    for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//    }
//    return  max;
// }

// console.log(maxArr([10,45,2,78,23]))
// console.log(maxArr([-10,-45,-2,-78,-23]))

// Now We find the Array Of Second Largets Number By using function

function SecondMax(arr){
    let Fmax = -Infinity;
    let Smax = -Infinity;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Fmax){
            Smax = Fmax;
            Fmax = arr[i]
            
        }
        else if(arr[i] > Smax && arr[i] < Fmax) {
             Smax = arr[i]
        }
      
    }
    return Smax;
    
}

console.log(SecondMax([10,45,2,78,23]));


