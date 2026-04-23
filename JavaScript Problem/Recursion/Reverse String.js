function reverseString(str, i = 0){
    if(i === str.length) return "";

    return  reverseString(str, i + 1) + str[i] ;
}

console.log(reverseString("hey"));

// 