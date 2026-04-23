let num = 3;
let strt = 1;

for(let i = 0; i < num; i++){
    let str = ""
    for(let j = 1; j <= num; j++){
        str += strt + " "
        strt++
    }

    console.log(str)
}
//. String pattern Same logic 

let n = 3;
let char = 1;
for(let i = 1; i <= n; i++){
    let str = ""
    for(let j = 1; j <= num; j++){
        str += String.fromCharCode(64 + char) + " "
        char++
    }

    console.log(str)
}


// left tringle pattern

let star = 4
for(let i = 1; i <= star; i++){
    let str = ""
    for(let j = 1; j <= i; j++){
        str += "*" + " "
    }

    console.log(str)
}

// Same Pattern In Number pattern
for(let i = 1; i <= star; i++){
    let str = ""
    for(let j = 1; j <= i; j++){
        str += i + " "
    }

    console.log(str)
}

//  Same code in String Character print 

for(let i = 1; i <= star; i++){
    let str = ""
    for(let j = 1; j <= i; j++){
        str += String.fromCharCode(64 + i) + " "
    }

    console.log(str)
}


