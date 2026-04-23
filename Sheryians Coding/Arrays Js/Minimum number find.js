let MinOfArray = [12, 45, 2, 99, 24,1, -1, -9]

let minValue = [12]

for(let i = 0; i < MinOfArray.length; i++){
    if(MinOfArray[i] < minValue){
        minValue = MinOfArray[i]
    }
}

console.log("This is Minimum number: ", minValue);
