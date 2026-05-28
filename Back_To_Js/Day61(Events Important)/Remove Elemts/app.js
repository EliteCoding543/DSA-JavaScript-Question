const btn = document.getElementById("btn");
const inputText = document.getElementById("input-text");
const right = document.getElementById("right");


// Add Task
btn.addEventListener("click", () => {

    const value = inputText.value.trim();

    if(value === "") return;

    let li = document.createElement("li");

    li.classList.add("list");

    li.innerHTML = `
        ${value}
    `;

    right.append(li);

    inputText.value = "";
});


// Event Delegation for Delete
right.addEventListener("click", (e) => {
         li.innerHTML =  ""
});