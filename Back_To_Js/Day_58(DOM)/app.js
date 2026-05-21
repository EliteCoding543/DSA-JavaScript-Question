// const parent = document.getElementById("list");

// let data = ["Home", "About", "Product", "Contact Us", "Help"];

// for(let item of data){
//     let li = document.createElement("li");
//     li.innerHTML = item;
//     parent.append(li)
// }



// const box = document.getElementById("box");

// const p1 = document.createElement("p");
// p1.innerHTML = "Hello from p1"

// const p2 = document.createElement("p");
// p2.innerHTML = "Hello from p2"

// const p3 = document.createElement("p");
// p3.innerHTML = "Hello from p3";

// box.append(p1, p2, p3);  // Both Working
// box.append("Hello Js")

// box.appendChild(p1, p2, p3) // Older way not work
// box.appendChild([[1, p2, p3]]) Same Error Showing in Console
// box.appendChild("hello Js")


//  How to Create A Attributes;

// box.setAttribute("class", "dabba"); // Class Name Ya Id Name Set Krna Elements ki 
// console.log(box.getAttribute("style")); // value kya style lga h usko dekhne m help krta h 
const list = document.getElementById("list")

const fruits = ["banana", "apple", "mango", "grapes"];

let count = 1;

for(let item of fruits){
    let li = document.createElement("li");
    li.innerText = item;
    li.setAttribute("class", "items");
    li.setAttribute("id", count)
    count++

    list.append(li)
}