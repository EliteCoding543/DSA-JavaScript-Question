let num = 5;

for (let i = 1; i <= num; i++) {
  let row = " ".repeat(num - i);
  
  // Increasing sequence
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  
  // Decreasing sequence
  for (let j = i - 1; j >= 1; j--) {
    row += j;
  }
  
  console.log(row);
}
