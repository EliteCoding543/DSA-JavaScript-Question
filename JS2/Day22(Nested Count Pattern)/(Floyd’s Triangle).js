let num = 4;
let count = 1;

for(let i = 0; i < num; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += count + " "
        count++
    }

    console.log(row);
}