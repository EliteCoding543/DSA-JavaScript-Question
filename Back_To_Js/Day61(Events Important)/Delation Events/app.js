const box = document.getElementById("box");
const cart = document.getElementById("cart");


box.addEventListener("click", (e) => {

    if(!e.target.classList.contains("card")){
        return;
    }

    let item = document.createElement("p");

    item.innerText = e.target.innerText;

    cart.append(item);
});

