function BMI(weight, height){
    return weight / (height * height)
}

console.log((BMI(69, 1.7).toFixed(2)));


// Discount Calculator Using HOF (Higer Order Function) 

function discountCalculator(discount){
    return function (price){
        return price - price * (discount / 100);
    };
}

let discount = discountCalculator(10);
console.log(discount(200));
