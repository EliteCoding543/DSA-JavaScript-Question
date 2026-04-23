let arr = [2, -3, 4, -5, 6, -7, -8];
let result = arr.filter((num) => num < 0).map((num) => num ** 2)
.reduce((num, curr) => num + curr, 0)

console.log(result)