const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")
const heading = document.getElementById("head")


outer.addEventListener("click", () =>{
       console.log("Outer Click")
})

middle.addEventListener("click", () =>{
    console.log("Middle Click")
})

inner.addEventListener("click", () =>{
    console.log("Inner Click")
})