const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let sides = input.split(' ').map(Number);

  // Sort sides to get largest side easily
  sides.sort((a, b) => a - b);

  let a = sides[0];
  let b = sides[1];
  let L = sides[2];

  let lhs = 2 * (L * L);
  let rhs = a * a + b * b + L * L;

  if (lhs < rhs) {
    console.log(1); // Acute-angled
  } else if (lhs === rhs) {
    console.log(2); // Right-angled
  } else {
    console.log(3); // Obtuse-angled
  }

  rl.close();
});
