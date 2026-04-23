// Block scope

var a = 99

function xyz(){
    var age = 33
    console.log("Hey");

    return function() {
        console.log("Hello Ji");
    }
}

var b = xyz()
console.log(a);
b()




// Second Question Run 

// function one() {
//     function inner(){
//         console.log("Hello from inner");
//     }
//     inner()
//     return inner
// }

// var three = one()
// one()



