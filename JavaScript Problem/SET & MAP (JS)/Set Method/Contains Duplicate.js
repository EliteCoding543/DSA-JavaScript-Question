function containsDuplicate(arr) {
   let seen = new Set()

   for(let num of arr){
        if(seen.has(num)){
            return true
        }

        else {
            seen.add(num)
        }
   }

   return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));