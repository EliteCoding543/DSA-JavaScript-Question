let form = document.getElementById("form");
let title = document.getElementById("title");
let textBar = document.getElementById("text-bar");
let right = document.getElementById("right");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(title.value === "" || textBar.value === ""){

        alert("Please fill all fields");

        return;
    }

    let div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
        <h3>${title.value}</h3>
        <p>${textBar.value}</p>
        <i class="fas fa-times close-btn"></i>
    `;

    // innerHTML ke baad select karo
    let closeBtn = div.querySelector(".close-btn");

    closeBtn.addEventListener("click", () => {
        div.remove();
    });

    right.appendChild(div);

    title.value = "";
    textBar.value = "";
});