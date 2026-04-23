let str = "aabbddeec";

let ans = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});

console.log(ans)