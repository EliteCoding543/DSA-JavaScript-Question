// const collection = document.getElementsByClassName("box")
// const list = document.querySelectorAll(".box")
// const ele = document.getElementById("title");

// console.dir(ele);

// document.body.innerHTML +=

// '<div class="box"></div>';

// console.log(collection.length)
// console.log(list.length)


// function abc(){
//     return {
//         b : 1
//     }
// }

// console.log(abc());


const textarea = document.getElementById("Text");
console.log(textarea)
const count = document.getElementById("count");

textarea.addEventListener("input", () => {
    if(count.length > 200) return
    count.textContent  = textarea.value.length;
});
