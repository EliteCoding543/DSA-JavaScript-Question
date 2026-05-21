const dabba = document.getElementById("box");

// How to change text in js property 
// dabba.innerText = "Hello Ji From JS". consider all string
// dabba.innerHTML = "ABCD"; chagnge in pure html and after text
// dabba.textContent = "vbsaab"; 


// How To be A Elements and text 
const parent = document.getElementById("main");
const mySpan = document.createElement("Span")
mySpan.innerText = "Hello There!"

parent.appendChild(mySpan);