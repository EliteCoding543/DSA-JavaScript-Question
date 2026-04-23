// Check even or odd by using function 

function isEven(num) {
    if(num % 2 == 0){
        return true
    }
    else {
       return false
    }
}

console.log(isEven(10));


// Greater Value Find using arrow function 

// const findMax = (a, b) => Math.max(a, b){


// }

// String length find uding arrow function

const count = str => str.length
console.log(count("abcdefghijklmnopqrstuvwxyz"));

function GreaterNum(a, b, c) {
    if(a > b && a > c){
        console.log("A is greater Number");   
    }
    else if (b > a && b > c) {
        console.log("B is Greater Number");  
    }

    else {
        console.log("C is Greater Number:");
        
    }
}

GreaterNum(100, 200, 290);



