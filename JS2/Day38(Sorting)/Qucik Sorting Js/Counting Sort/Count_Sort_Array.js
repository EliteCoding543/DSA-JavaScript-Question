function CountingSortArr(arr){
   // Find Max Element 
   let max = Math.max(...arr);

   let count = new Array(max + 1).fill(0)

   // Count Frequency
   for(let num of arr){
      count[num]++
   }

   let result = []
    // build sorted array
   for(let i = 0; i < count.length; i++){
        while(count[i] > 0){
            result.push(i);
            count[i]--
        }
   }

   return result;
}

console.log(CountingSortArr([8, 9, 10, 12, 8, 9, 11, 15]));