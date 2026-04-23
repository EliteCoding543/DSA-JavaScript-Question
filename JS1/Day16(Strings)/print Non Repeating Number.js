function FirstNonReapting(str){
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1;
    }
//    Now Count Non Reapt Char
for(let item in freq){
    if(freq[item] === 1){
        return `Non Reapting Char Is : ${item}`;
    }
}
return null;

}

console.log(FirstNonReapting("aab"))