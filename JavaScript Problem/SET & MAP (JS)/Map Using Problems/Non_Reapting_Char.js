function firstNonReapting(arr){
   let myMap = new Map()

   for(let num of arr){
        myMap.set(num, (myMap.get(num) || 0) + 1);
   }

   // Frquency Count 
   for(let num of arr) {
      if(myMap.get(num) === 1){
        return num;
      }
   }
}

console.log(firstNonReapting([4, 5, 1,  2, 0, 4]))