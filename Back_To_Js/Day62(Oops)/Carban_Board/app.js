const columns = document.querySelectorAll(".task-list");

function addTask() {
  const input = document.getElementById("taskInput");

      if (input.value === ""){
        alert("Please Enter Some Value?");
        return;
      } 

      const task = document.createElement("div");

      task.classList.add("task");
      task.innerText = input.value;

      task.draggable = true;

      task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });

  document.getElementById("todo").appendChild(task);

  input.value = "";
}

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();

    const dragging = document.querySelector(".dragging");

    if (dragging) {
      column.appendChild(dragging);
    }
  });
});

window.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    addTask()
  }
})