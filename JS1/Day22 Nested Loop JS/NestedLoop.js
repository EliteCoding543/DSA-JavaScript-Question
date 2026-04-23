let arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++){
    let ans = []
    for(let j = i; j < arr.length; j++){
        ans.push(arr[j])
        console.log(ans)
    }
}

// Now String ...

let str = "abcdefg";
for(let i = 0; i < str.length; i++){
    let str2 = ""
    for(let j = i; j < str.length; j++){
        str2 += str
    }
}

console.log(str)