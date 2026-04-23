let a = Number(prompt("Enter Number 1"))
let b = parseInt(prompt("Enter Number 2"))
let opeartion = prompt("Enter operator : +, -, *, /")

if(isNaN(a) || isNaN(b))
{
    console.log("Invalid Input");
} 

else {
    switch(opeartion){
        case "+":
            console.log(a + b);

        case "-":
            console.log(a - b);
            
        case "*":
            console.log(a * b);

        case "/":
            console.log(a / b); 

        default: 
            console.log("Invalid Operator");
                            
    }
}