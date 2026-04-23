const output = document.getElementById("output");
let htmlContent = "<h2>Using the break statement:</h2>";

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    htmlContent += "Found 6! Breaking the loop.<br>";
    break; // Exit the loop immediately
  }
  htmlContent += `Current number is ${i}<br>`;
}

htmlContent += "Loop finished.";
output.innerHTML = htmlContent;