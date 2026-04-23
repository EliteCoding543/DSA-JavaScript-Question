function checkMaxNum(a, b){
    if(a > b){
        return a
    }

    return b
}

console.log(checkMaxNum(20, 30))
console.log(checkMaxNum(5, 9));


//  By using Ternory Operator 

function maxNum(a, b){
    return a > b ? a : b
}

console.log(maxNum(120, 230))
console.log(maxNum(55, 29));