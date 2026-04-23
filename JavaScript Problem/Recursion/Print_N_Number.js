// function nNumberPrint(num){
//     if(num === 1) return 1; // Base Case

//     console.log(num)
//     return nNumberPrint(num - 1)
// }

// console.log(nNumberPrint(5));


// Print Num 1 to 5

function PrintNum(n){
    if(n === 0) return 0;

    PrintNum(n - 1)
    console.log(n)
}

PrintNum(5);