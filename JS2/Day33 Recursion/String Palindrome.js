function isPalindrome(str){
    function helper(str, start, end){
        if(start >= end){
            return true
        }

        if(str[start] !== str[end]){
            return false
        }

        return helper(str, start + 1, end - 1);
    }

    return helper(str, 0, str.length - 1);
} 

console.log(isPalindrome("nitin"));