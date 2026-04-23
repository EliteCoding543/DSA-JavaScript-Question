let arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++){
    let temp = []
    for(let j = i; j < arr.length; j++){
        temp.push(arr[j])
        console.log(temp)
    }
}

//  Same Process For SubString 

let str = "abc";

for(let i = 0; i < str.length; i++){
    let EmptyStr = ""
    for(let j = i; j < str.length; j++){
        EmptyStr += str[j]
        console.log(EmptyStr)
    }
}

