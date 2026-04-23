 var n = 23;

 if (n < 0) {
    
    if(n % 2 == 0) {
        console.log("The number is negative and even");
    }        else {
        console.log("The number is negative and odd");
    }   
 }

 if(n > 0){
    if (n % 2 == 0) {
        console.log("The number is positive and even");
    } else {
        console.log("The number is positive and odd");  
    }
}

else {
    console.log("The number is zero");
}

// Function to count negative numbers in an array
function printCount(a, b, c) {
    var count = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++;
        }
        else if (b[i] < 0) {
            count++;
        }
        else if (c[i] < 0) {
            count++;
        }
    }

    return count;
}
var a = [1, -2, 3, -4, 0, -5];
var b = [0, 2, 4, 6];
var c = [];

console.log('Negative count in a:', printCount(a)); // 3
console.log('Negative count in b:', printCount(b)); // 0
console.log('Negative count in c:', printCount(c)); // 0