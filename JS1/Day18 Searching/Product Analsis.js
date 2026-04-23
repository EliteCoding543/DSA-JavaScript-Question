function ProductFind(arr){
    let sum = 0
    let cheapest = products[0]  
    let Expensive = products[0]

    for(let item of arr ){
        sum += item.price

        if(item.price < cheapest.price){
            cheapest = item
        }

        if(item.price > Expensive.price){
            Expensive = item
        }
    }

    return {
        cheapestProduct : cheapest.name,
        mostExpensiveProdut : Expensive.name,
        totalSum : sum,
        avrageOfProduct : (sum / arr.length)
     }

}

const products = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Laptop", price: 65000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Keyboard", price: 2000 },
  { id: 6, name: "Smart Watch", price: 15000 }
];

console.log(ProductFind(products));
