function check_last_digit(n) {
   let lastDigit = n % 10;
   
   if (lastDigit % 2 === 0) {
      return 1;
   } else {
      return 0;
   }
}
console.log(check_last_digit(2009));   // Output: 0 (kyunki last digit 9 odd hai)
console.log(check_last_digit(312344)); // Output: 1 (kyunki last digit 4 even hai)