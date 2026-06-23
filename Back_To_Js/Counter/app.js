const plusBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");
const minusBtn = document.getElementById("minus");
const countShow = document.getElementById("count-show");

let count = 0;
countShow.textContent = count;

plusBtn.addEventListener("click", () => {
    count++;
    countShow.textContent = count;
});

minusBtn.addEventListener("click", () => {
    if(count > 0){
       count--;
      countShow.textContent = count; 
    }
    
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countShow.textContent = count;
});

// You can similarly add listeners for restBtn and minusBtn if needed