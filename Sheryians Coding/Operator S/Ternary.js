var marks = 44;

let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "Fail"
console.log(grade);

// Check points value

var Points = 60;

let Postion = Points >= 100 ? "Gold" : Points >= 50 ? "Sliver" : "Bronze"
console.log(Postion);

// Acces Deny ya Allow 

let LoggdeIn = true
let hasToken = false

let Access = LoggdeIn && hasToken ? "Allow" : "Deny";

console.log(Access);


