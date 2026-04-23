let n = 9;
// Row Handle 
for(let i = 1; i <= n; i++){
    let str = "";
    // Space handle 
    for(let space = 1; space <= n - i; space++){
        str += " "
    }
    // Start Handle
    for(let j = 1; j <= 2*i-1; j++){
        str += "*"
    }

    console.log(str);
}