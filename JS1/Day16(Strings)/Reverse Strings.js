function isPalindrome(str){
    let startPonts = 0;
    let EndingPoints = str.length - 1
    while(startPonts < EndingPoints){
        if(str[startPonts] != str[EndingPoints]){
            return false
        }

        startPonts++;
        EndingPoints--;
    }

    return true;
}

console.log(isPalindrome("MADAM")); // true
console.log(isPalindrome("HELLO")); // false
 

