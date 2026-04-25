let n = 5;

// Top part
for (let i = 1; i <= n; i++) {
  let row = " ".repeat((i - 1) * 2);  // space handle 
  
  for (let j = i; j <= n; j++) {
    row += j + " ";
  }
  
  console.log(row);
}

// Bottom part (reverse)
for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat((i - 1) * 2);  // space handle 
  
  for (let j = i; j <= n; j++) {
    row += j + " ";
  }
  
  console.log(row);
}