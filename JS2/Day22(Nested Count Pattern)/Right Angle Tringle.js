// Right-Angled Triangle (Repeated Number Pattern)

let num = 4;
for(let i = 0; i < num; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        row += (i + 1) + " "
    }

    console.log(row);
}