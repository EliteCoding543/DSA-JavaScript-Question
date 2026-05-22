const darkModeBtn = document.getElementById("dark");
const lightModeBtn = document.getElementById("light")
const mainBox = document.getElementById("box");
const MyText = document.getElementById("text");
const heading = document.getElementById("heading")


darkModeBtn.addEventListener("click", () => {
    mainBox.style.backgroundColor = "black";
    mainBox.style.color = "white"
});

lightModeBtn.addEventListener("click", () => {
    mainBox.style.backgroundColor = "white";
    mainBox.style.color = "black"
});


MyText.addEventListener("focus", () => {
    MyText.style.width = "40%"
})

MyText.addEventListener("blur", () => {
    MyText.style.width = "30%"
})

MyText.addEventListener("input", (e) => {
    // console.log(MyText.value);
    // console.log(e.target.value)
    heading.innerText = e.target.value
})
