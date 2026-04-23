let arr = [12, 45, 72, 178, 83, 90, 11];
let firstLargest = arr[0]
let secondLargest = arr[1]
let ThirdLargest = arr[2]
// Shift and Accending order  
if(firstLargest < secondLargest){
  [firstLargest, secondLargest] = [secondLargest, firstLargest];
}

if(firstLargest < ThirdLargest){ // Condtion False Than Value Not Change
  [firstLargest, ThirdLargest] = [ThirdLargest, firstLargest]
}

if(secondLargest < ThirdLargest){
  [secondLargest, ThirdLargest] = [ThirdLargest, secondLargest]
}

// Now Will Run a loop check Condtion

for(let i = 3; i < arr.length; i++){
  let num = arr[i]
  if(num > firstLargest){
    ThirdLargest = secondLargest;
    secondLargest = firstLargest
    firstLargest = num
  }
  
  else if(num > secondLargest){
     ThirdLargest = secondLargest;
     secondLargest = num
  }
  
  else if(num > ThirdLargest){
    ThirdLargest = num;
  }
}

console.log("This is firstLargest", firstLargest)
console.log("This is secondLargest", secondLargest)
console.log("This is ThirdLargest", ThirdLargest)