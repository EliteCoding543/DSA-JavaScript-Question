function checkIfPangram(str){
    let set = new Set()

    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        set.add(char)
    }
    return set.size === 26
}

console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz"));