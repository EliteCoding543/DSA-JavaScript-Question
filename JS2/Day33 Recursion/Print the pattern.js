function Pattern(n){
    if(n <= 0) return "";

    let prev = Pattern(n - 1);   // pehle wali rows
    let row = "";

    for(let i = 0; i < n; i++){
        row += "* ";
    }

    return prev + row + "\n";
}

console.log(Pattern(5));