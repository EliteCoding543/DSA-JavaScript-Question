function SumOfNum(num){
    // Base Case Kya Karna Reverse Num Sum
    if(num == 0){
        return 0;
    }

    return num + SumOfNum(num - 1)
}

console.log(SumOfNum(6))   // N ==> 1

// Now i will print 1 ===> N

function Sum(n){
    if(n > 10){
        return 0
    }

    return n + Sum(n + 1)
}

console.log(Sum(1))