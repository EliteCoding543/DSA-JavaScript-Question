const numbers = [1, 2, 3, 4];
const result = numbers.reduce((sum, num) => sum + num, 0)
console.log(result)

//  Total Prices Find Real World Object
const cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 },
  { item: "Bag", price: 100 }
];

const totalAmt = cart.reduce((total, curr) => total + curr.price, 0)
console.log(totalAmt)


// 👉 Frequency = kitni baar koi value repeat ho rahi hai

const users = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 25 },
  { name: "John", age: 20 },
  { name: "Alex", age: 25 }
];
const ans = users.reduce((acc, user) => {
  acc[user.age] = (acc[user.age] || 0) + 1;
  return acc;
}, {});

console.log(ans);