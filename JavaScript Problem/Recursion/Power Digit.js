function PowerNum(power, exp){
    if(exp === 0) return 1;

    return power *PowerNum(power, exp - 1);
}

console.log(PowerNum(4, 3));