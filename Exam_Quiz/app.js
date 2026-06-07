const links = document.querySelectorAll(".list a");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    for (const item of links) {
      item.classList.remove("active");
    }

    this.classList.add("active");
  });
}