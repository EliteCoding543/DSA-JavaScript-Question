let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let sum = 0;
for(let item of arr){
    for(let value of item){
        sum += value
    }
}
console.log(sum)