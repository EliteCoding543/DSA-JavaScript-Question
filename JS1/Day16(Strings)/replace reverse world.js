let str = "I Love Coding";
let result = str.split(" "); // agar split("") space nhi to letter revrse and split(" ") word reverse  
let reverseString = "";

for(let i = result.length - 1; i >=0; i--){
    reverseString += result[i] + " ";
}

console.log(reverseString) 