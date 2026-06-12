// const intervalId = setInterval(() => {
//     console.log("Hello");
// }, 0);

// clearInterval(intervalId);

const body = document.getElementById("bd");
const ad = document.createElement("article");
const adText = document.createElement("h1");
const adCloseBtn = document.createElement("button");
adCloseBtn.innerText = "Close Ad"
adText.innerText = "This is Your Ad!"

ad.append(adText, adCloseBtn);

adCloseBtn.addEventListener("click", () => {
    ad.remove()
})

setInterval(() => {
    body.append(ad)
}, 3000);