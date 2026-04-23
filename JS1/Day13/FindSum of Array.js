function FindSum( arr){
    let sum = 0;
    for(let item of arr){
        sum = sum + item
    }
    return sum
}

console.log(FindSum([22, 44, 55, 77, 88]));

// Product of Array using for of loop 

function ProductOfArray(arr){
    let prod = 1;
    for(let item of arr){
        prod = prod * item
    }

    return prod
}

console.log(ProductOfArray([1, 2, 3, -1]));

//Average Grades
 
function averageGrade(arr) {
 // return the average value
 let sum = 0
 for(let i = 0; i < arr.length; i++){
  sum = sum + arr[i]
 }

 let avg = sum / arr.length
 return avg
// do not console.log here
}

//  Replace element 
let arr = [2,3,4,5,6];

function ReplaceElement(arr){
   let ans = [];

   for(let i = 0; i < arr.length; i++){
      
      if(i === 0){
         ans[i] = arr[i];   // first same
      }

      else if(i === arr.length - 1){
         ans[i] = arr[i] * arr[i-1];   // last element
      }

      else{
         ans[i] = arr[i-1] * arr[i+1]; // middle
      }
   }

   return ans;
   
}

console.log(ReplaceElement(arr));

// Second Apporch Replace item 

// only condition here

let ans = []
ans[0] = arr[0] * arr[1]

ans[n - 1] = arr[n - 1] * arr[n - 2]

for(let i = 1; i > n; i++){
    ans[i] = arr[i - 1] * arr[i + 1]
}

return ans



