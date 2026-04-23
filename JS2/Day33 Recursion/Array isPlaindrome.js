function isPalindrome(arr, n) {
  let res = isPalindromic(arr, 0, n - 1);
  if (res === 1)
    return true;
  return false;
}

function isPalindromic(arr, s, e){
  if(s >= e ) return 1;
  if(arr[s] != arr[e]) return 0;
  return isPalindromic(arr, s+1, e-1);
}

console.log(isPalindrome([1, 2, 1], 3)); // true
console.log(isPalindrome([1, 2, 3], 3)); // false
