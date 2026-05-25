function isAlphaNum(char) {
  const lowerChar = char.toLowerCase();
  return (char >= '0' && char <= '9') || (lowerChar >= 'a' && lowerChar <= 'z');
}

function isPalindrome(str){
  let start = 0;
  let end = str.length - 1;
  
  while(start < end){
    if(!isAlphaNum(str[start])){
      start++;
      continue;
    }
    if(!isAlphaNum(str[end])){
      end--;
      continue;
    }
    
    if(str[start].toLowerCase() !== str[end].toLowerCase()){
      return false;
    }
    
    start++;
    end--;
  }
  
  return true;
}

console.log(isPalindrome("race#5car")); 
console.log(isPalindrome("Ac3?e3c&a"));
