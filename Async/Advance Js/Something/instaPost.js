const output = document.getElementById("output");

function show(message) {
    const p = document.createElement("h3");
    p.textContent = message;
    output.appendChild(p);
}

function clickPicture(fn) {
    setTimeout(() => {
        show("📸 Click Picture");
        fn();
    }, 4000);
}

function selectPicture(fn) {
    setTimeout(() => {
        show("🖼️ Select Picture");
        fn();
    }, 3000);
}

function applyFillter(fn) {
    setTimeout(() => {
        show("🎨 Apply Filter");
        fn();
    }, 2000);
}

function chooseCaption(fn) {
    setTimeout(() => {
        show("✍️ Choose Caption");
        fn();
    }, 2000);
}

function postPicture() {
    setTimeout(() => {
        show("🚀 Post Picture");
    }, 1000);
}

clickPicture(() => {
    selectPicture(() => {
        applyFillter(() => {
            chooseCaption(() => {
                postPicture();
            });
        });
    });
});