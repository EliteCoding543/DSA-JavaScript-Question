let arr = [1, 2, 3, 4, 5, 6];
let result = arr.map((item) => {
    return  item % 2 === 0 ? "Even" : "Odd"

})
console.log(result)