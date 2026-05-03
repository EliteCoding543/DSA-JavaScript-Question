function isPalindrome(str) {
   function helper(str, start = 0, end = str.length - 1){
     while(start <= end){
       if(str[start] != str[end]){
         return false;
       }
       start++
       end--
     }
     return true;
   }
   
   return helper(str)
}
console.log(isPalindrome("abba"))