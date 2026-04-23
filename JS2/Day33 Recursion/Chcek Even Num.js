function ChcekEven(num){
    if(num <= 2) return num;

    if(num % 2 === 0){
        console.log(`Even Number ${num}`);
    }

    return ChcekEven(num - 1)
}

console.log(ChcekEven(6));