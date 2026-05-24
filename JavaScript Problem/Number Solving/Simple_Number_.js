let N = 1000000000; // Test Case Input

let N_str = N.toString().trim();
let isAwesome = false;
let count = 1;

if (N_str.length >= 3) {
  for (let i = 0; i < N_str.length - 1; i++) {
    // Condition: Agla digit same ho AUR wo digit '0' nahi hona chahiye
    if (N_str[i] === N_str[i + 1] && N_str[i] !== '0') {
      count++;
      if (count >= 3) {
        isAwesome = true;
        break; 
      }
    } else {
      count = 1; // Agar digit badla YA fir '0' mil gaya, toh count reset
    }
  }
}

// Final Output
if (isAwesome) {
  console.log("Awesome");
} else {
  console.log("Good");
}