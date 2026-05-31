function firstNonReapting(arr){
   let myMap = new Map()
// Step 1: Frequency Count
   for(let num of arr){
        myMap.set(num, (myMap.get(num) || 0) + 1);
   }

// Step 2: Find first frequency = 1
   for(let num of arr) {
      if(myMap.get(num) === 1){
        return num;
      }
   }
}

console.log(firstNonReapting([4, 5, 1,  2, 0, 4]))