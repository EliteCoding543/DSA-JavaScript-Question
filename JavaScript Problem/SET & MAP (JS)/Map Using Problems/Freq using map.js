let arr = ["a", "b", "c", "a", "b", "d", "a"];

let freq = new Map();

for(let char of arr){
    freq.set(char,(freq.get(char) || 0)+ 1);
}

console.log(freq);