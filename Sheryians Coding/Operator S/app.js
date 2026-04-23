const h1Heading = document.querySelector("h1");
const Btn = document.getElementById("btn");

Btn.addEventListener("click", () => {
    h1Heading.innerHTML = "Good Morning India";
});

const newParagraph = document.createElement("p")
const Cont = document.getElementById("Cont");
newParagraph.textContent = "This Is New Para";
Cont.appendChild(newParagraph);

// Accessing a button element
const toggleButton = document.getElementById('toggleButton');

// Accessing a paragraph element
const toggleParagraph = document.getElementById('toggleParagraph');

// Adding a click event listener
toggleButton.addEventListener('click', function() {
    // Toggling the visibility of the paragraph
    toggleParagraph.style.display = toggleParagraph.style.display === 'none' ? 'block' : 'none';
});  