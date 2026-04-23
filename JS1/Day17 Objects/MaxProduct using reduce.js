const Product = [
    {item : "Phone", price : 1500},
    {item : "Laptop", price : 1800},
    {item : "Desktop", price : 2000},
    {item : "Tablet", price : 21000}
];

const Maxproduct = Product.reduce((item, max) => (item.price > max.price ? 
    item : max));
console.log(Maxproduct);