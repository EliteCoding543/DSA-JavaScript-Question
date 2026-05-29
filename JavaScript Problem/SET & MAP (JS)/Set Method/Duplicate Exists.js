function hasDuplicate(arr){

   return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1,2,3,1])); // true

console.log(hasDuplicate([1,2,3])); // false