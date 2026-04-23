function SumOfNum(num){
    if(num === 0) return 0;

    return  num + SumOfNum(num - 1);
}

console.log(SumOfNum(5));