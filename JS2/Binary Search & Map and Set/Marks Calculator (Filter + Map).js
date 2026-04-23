const marks = [25, 45, 12, 67, 30, 90];

// Step 1: Filter karo jo 33 se kam hain
let result = marks.filter((mark) => mark < 33).map((mark) => mark + 5)
console.log(result)
// Expected Output: [30, 17, 35]