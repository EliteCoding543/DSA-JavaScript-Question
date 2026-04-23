let cart = [
  {item: "Shoes", price: 1200},
  {item: "Shirt", price: 800},
  {item: "Cap", price: 300}
];

let result = cart.filter(PriceChcek => PriceChcek.price > 500);
console.log(result) // 