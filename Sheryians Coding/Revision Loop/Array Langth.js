// Find  Max Value Of Array 

let MaxValueofArr = [10, 45, 2, 99, 23];
let maxValue = [10];
for(let i = 0; i < MaxValueofArr.length; i++){
    if(MaxValueofArr[i] > maxValue){
        maxValue = MaxValueofArr[i];
    }
}

console.log("Maximum Value Of Array is :", maxValue);

// Find Minimum Value Of Array  

let MiniValueArr = [10, 45, 2, 99, 23];
let miniValue = [45];

for(let i = 0; i < MiniValueArr.length; i++){
    if(MiniValueArr[i] < miniValue){
        miniValue = MiniValueArr[i]
    }
}

console.log("Minimum Value of Array is :", miniValue);
