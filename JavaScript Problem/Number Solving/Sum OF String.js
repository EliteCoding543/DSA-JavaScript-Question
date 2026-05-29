function StringSum(str){

    let sum = 0;

    for(let char of str){

        sum += Number(char);
    }

    return sum;
}

console.log(StringSum("123"));