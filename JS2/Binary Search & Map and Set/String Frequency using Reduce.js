let arr = ["a", "b", "a", "c", "b", "a"];
let result = arr.reduce((obj, str) => {
   obj[str] = (obj[str] || 0) + 1
   return obj;
}, {})

console.log(result)