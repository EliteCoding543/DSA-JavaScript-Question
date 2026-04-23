// var count = 0;
// var n = 123456;
// while (n > 0) {
//     count++
//     n = Math.floor(n / 10)
//     console.log(n);
// }


// Reverse Number Is 

//return the string
  //do not console.log here
//   let ans = 0;
//   let num = 54321;
//   while(num > 0){
//     let lastDigit = num % 10
//     ans = ans * 10 + lastDigit;
//     num = Math.floor(num / 10)
//   }

//   return ans


// Prime Numbers Range
 
// Your code here
 var isPrime = true;
  for(let i = 2; i <= n; i++){
    let isPrime = true
    for(let j = 2; j ** 2 <= i; j++){
      if(i % j == 0){
        isPrime = false
        break
      }
    }
    if(isPrime == true){
      console.log(i)
    }
  }


  //Palindrome Number Checker
   
  //Write your code here and print the required output
 let rev = 0
 let num = 125;
  let copy = num
  while(num != 0){
    let ld = num % 10
    rev = rev * 10 + ld
    num = Math.floor(num / 10)
  }
  if(rev == copy){
    console.log(true)
  }
  else {
    console.log(false)
  }