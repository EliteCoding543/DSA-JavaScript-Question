let num = 5;
for(let i = 1; i <= num; i++){
    let row = " ".repeat(num - i);
///.  Incresing Order 
    for(let j = 1; j <= i; j++){
        row += j
    }
    
    // Decreseing Order
    for(let j = i - 1; j >= 1; j--){
        row += j
    }
    console.log(row)
}
// row += String.fromCharCode(64 + j);  agar char print karane h to ye condition lga do 