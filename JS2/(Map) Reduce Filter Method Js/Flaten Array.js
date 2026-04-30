let arr = [1, [2, 3], [4, 5]];
let flat = arr.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [1, 2, 3, 4, 5]



// Sabse Easy: flat() Method (Modern JS)

let nested = [1, [2, 3], [4, [5, 6]]];

// Sirf 1 level flatten karega
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]

// Pura flatten kar dega chahe kitni bhi nesting ho
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]