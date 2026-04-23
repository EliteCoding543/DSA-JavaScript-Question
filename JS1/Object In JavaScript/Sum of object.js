let obj = {
    a : 10,
    b : 20, 
    c : 30, 
    d : 40
}
let sum = 0;
for(let key in obj){
    sum += obj[key]
}

console.log(sum)