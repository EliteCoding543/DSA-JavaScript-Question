const output = document.getElementById("output");

function show(message) {
    const p = document.createElement("h3");
    p.textContent = message;
    output.appendChild(p);
}

function clickPicture() {
   return new Promise((res, rej) => {
        setTimeout(() => {
            show("📸 Click Picture");
            res();
        }, 4000);
   })
}

function selectPicture() {
   return new Promise((res, rej) => {
        setTimeout(() => {
            show("🖼️ Select Picture");
            res();
        }, 3000);
   })
}

function applyFillter(fn) {
   return new Promise((res, rej) => {
         setTimeout(() => {
            show("🎨 Apply Filter");
            res();
    }, 2000);

   })
}

function chooseCaption(fn) {
    return new Promise((res, rej) => {
        setTimeout(() => {
        show("✍️ Choose Caption");
        res();
    }, 2000);

    })
}

function postPicture() {
  return new Promise((res, rej) => {
      setTimeout(() => {
        show("🚀 Post Picture");
        res()
    }, 1000);
  })
}

clickPicture()
.then(selectPicture)
.then(applyFillter)
.then(chooseCaption)
.then(postPicture)