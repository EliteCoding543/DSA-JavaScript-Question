let num = 4;

// for(let i = 0; i < num; i++){
//     let row = "";
//     for(let j = 0;  j < num; j++){
//         row += "*"
//     }

//     console.log(row);
// }

//  each line print a number sequence 

// let num = 4;
for(let i = 0; i < num; i++){
    let row = "";
    for(let j = 0; j < num; j++){
        row += (i + 1) + " " // yaha epty string har number ke bad ek space de rhe h 
    }

    console.log(row)
}