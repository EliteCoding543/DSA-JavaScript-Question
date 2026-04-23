function printNum(n){
    if(n == 0){
        return;
    }

    console.log(n) // Yha numberc har prnt hoga cuurent value
    printNum(n - 1) // Baar Baar Hoga hoga fn call or cuurent num - 1 se 
}

printNum(5)