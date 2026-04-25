let num = 5;
for(let i = 1; i <= num; i++){
    let row = " ".repeat((i - 1)*2) // Space Handle
    for(let j = i; j <= num; j++){
        row += j + " "
    }
    console.log(row)
}

for(let i = num - 1; i >= 1; i--){
    let row = " ".repeat((i - 1)*2) // Space Handle
    for(let j = i; j <= num; j++){
        row += j + " "
    }
    console.log(row)
}