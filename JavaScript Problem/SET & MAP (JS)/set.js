const fruits = new Set(["apple", "banana", "orange", "Mango"]);
// How to new value add in set
fruits.add("Chips");
console.log(fruits);
console.log(fruits.has("banana"));  // True Exixts Value
console.log(fruits.has("Graps"));   // False Not Exixts Value;
