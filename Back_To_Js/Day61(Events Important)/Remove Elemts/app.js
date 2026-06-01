const btn = document.getElementById("btn");
const inputText = document.getElementById("input-text");
const right = document.getElementById("right");
const lists = document.getElementById("lists");


// Add Task
btn.addEventListener("click", () => {

    const value = inputText.value.trim();

    if(value === "") return;

    let li = document.createElement("li");

    li.classList.add("list");

    li.innerHTML = `
        ${value}
    `;

    lists.append(li);

    inputText.value = "";
});


// Event Delegation for Delete
lists.addEventListener("click", (e) => {
        if(e.target.tagName == "LI"){
            e.target.remove()
        }
});