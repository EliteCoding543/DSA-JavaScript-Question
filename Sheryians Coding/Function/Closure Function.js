function abcd(){
    let a = 15;
    return function(){
        console.log(a);
    }
}

console.log(abcd(20));


// Convert arrow function statement function

// function multiply(a, b){
//     return a*b;
// }

let multiply = (a, b) => {
    return a * b;
}

console.log(multiply(5, 9))

function sayHi(name = "Guest"){
    console.log("Hey", name);
    
}

sayHi()