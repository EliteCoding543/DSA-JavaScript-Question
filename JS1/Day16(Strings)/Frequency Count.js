let str = "aabbcdde";

let freq = {};
for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(freq[char]){
        freq[char] = freq[char] + 1;
    }

    else {
        freq[char] = 1;
    }
}

console.log(freq)