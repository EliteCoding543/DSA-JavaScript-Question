// Array Swipe 

let arr = [1, 2, 3, 4, 5, 6]
let temp = arr[0]
arr[0] = arr[5]
arr[5] = temp;
console.log(arr); // Output Here After Swipe Array [ 6, 2, 3, 4, 5, 1 ]

// Sum Of Two Array 

let a = [5, 6, 7, 8 , 9]
let sum = 0
for(let i = 0; i < a.length; i++){
   sum = sum + a[i] 
}
console.log("Sum Of Array :", sum);

//🧠 Dry Run

// sum = 0

// sum = 0 + 5 → 5

// sum = 5 + 6 → 11

// sum = 11 + 7 → 18

// sum = 18 + 8 → 26

// sum = 26 + 9 → 35




 // Reverse A string 

 function reverseAString(inputString){
     let result = "";   // Yha Humara string add hogi update ho kar
     for(let i = inputString.length - 1; i >= 0; i--){
          result = result + inputString[i]
     }

     return result;
 }

console.log(reverseAString(["mavihS"]));

 