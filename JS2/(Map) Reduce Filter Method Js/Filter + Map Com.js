const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 20000 },
  { name: "Watch", price: 8000 }
];
const result = products.filter(user => user.price >= 20000).map(p => ({
  name : p.name,
  price : p.price * 0.90
}))
console.log(result)