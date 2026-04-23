 let arr = [10, 20, 30, 40]

 let MaxNum = 10
 for(let i = 0; i < arr.length; i++){
    if(arr[i] > MaxNum){
        MaxNum = arr[i]
    }
 }

 console.log("Max Number is :", MaxNum);
 
//  Interview me logic kaise bolna (perfect version)
 

// “First I will take a variable max and initialize with first element of array.
// Then I will run loop on array.
// Har element ko max se compare karunga.
// Agar current element bada hai to max update karunga.
// Finally max print karunga.”

let num = 123456;
let ans = 0

for(let i = 0; i < num; i++){
    let lastDigit = num % 10

    ans = ans * 10 + lastDigit
    num = Math.floor(num / 10)
}

console.log(ans); 
