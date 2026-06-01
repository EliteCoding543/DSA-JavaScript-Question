const box = document.getElementById("box");
const ele = document.getElementById("elements");

ele.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

box.addEventListener("dragover", (e) => {
    e.preventDefault();
});

box.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    box.appendChild(draggedElement);
});