let arr = [1, 2, 3, 2, 1];
let Left = 0;
let Right = arr.length-1;

let isPalindrome = true;

while(Left < Right){
    if(arr[Left] !== arr[Right]){
        isPalindrome = false;
        break;
    }

    Left++;
    Right--;
}

console.log(isPalindrome);

//  Same using a function 

function isPalindrome(arr){
  let left = 0;
  let right = arr.length-1;
  
  while(left < right){
    if(arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  
  return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1]));