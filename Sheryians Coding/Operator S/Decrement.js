let a = 5;
++a;
console.log(a);

let b = 6;
b++;
console.log(b);

// Post increament m value bad m increament hogi 
let x = 3;
let y = x++;
console.log(x, y); // output (4, 3)


// Pre Increment m value phle Increment ho jate h 

let p = 4;
let q = ++p;
console.log(p, q); // output (5, 5)

let m = 10;
console.log(m--); // post increment value same return after print output 10 
console.log(m); // Output is => 9

// 2

let n = 5;
let result = n++;
console.log(result); // output 5 after post increment 
let sum = result + ++n; // result value 5 and ++n  = 7
console.log(sum); // 12 becouse after pre increment value 5 + 7

let like = 100;

function likePost(){
   return ++like;
}

console.log(likePost());
console.log(like);

// 5..............................

let count = 5;

if(count-- === 5){
    console.log("Matched");
}
else
{
    console.log("Not Matched");
}







