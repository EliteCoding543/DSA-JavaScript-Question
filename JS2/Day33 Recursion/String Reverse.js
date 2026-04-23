function reverseString(str, i) {
    if (i === str.length) {
        return "";
    }

    return reverseString(str, i + 1) + str[i];
}

console.log(reverseString("hello", 0));