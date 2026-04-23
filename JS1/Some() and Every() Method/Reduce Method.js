let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) =>{
      return acc + curr;    
},0);

console.log(sum)

//  👉 product (multiply sabka) nikal (reduce)

let array = [10, 2, 3, 4];

let ans = array.reduce((start, persentval) => start * persentval, 1) // Agar {} nhi h to automatic retun hota h agar {} h to return likhna hota h 
console.log(ans);

// Find 1000 > price 

let obj = [
    {item : "Shoes", price : 500},
    {item : "Tshirt", price : 400},
    {item : "Pant", price : 600},
    {item : "Jarsey", price : 200},
];

let Result = obj.reduce((acc, curr) => {
    return curr.price > 200 ? acc + curr.price : acc
}, 0)

console.log("Total Price Of :", Result)

//  Second Method Same Q?
let cart = [
    {item : "shoe", price : 1000},
    {item : "fruit", price : 500},
    {item : "cloths", price : 1500}
];

let Filtered = cart.filter(item => item.price > 500);
console.log(Filtered)

let total = Filtered.reduce((acc, curr) => acc + curr.price, 0);
console.log(total)