const box = document.getElementById("box")
box.innerText = "Box Ka Text Change kiya h "
const tagName = document.getElementsByTagName("h1");
console.log("Access via TagName");
const heading = document.getElementsByClassName("heading2");
console.log("Access via ClassName");

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
   { btn.style.backgroundColor = "red"
    btn.style.color = "black"
    btn.style.border = "none"
    btn.style.padding = "10px 20px"}
})


document.addEventListener("mousemove", () => {

    document.body.style.background =
    `rgb(
        ${Math.random()*255},
        ${Math.random()*255},
        ${Math.random()*255}
    )`;

});
