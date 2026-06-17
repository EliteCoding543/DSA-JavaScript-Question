const input = document.getElementById("gs")
const accioInput = document.getElementById("ac")

let id;
function inputHandler(e){
    clearTimeout(id)
    id = setTimeout(() => {
         console.log(`api called for ${e.target.value}`);
    }, 2000)
}

input.addEventListener("input", inputHandler);


// How to create a debouncing function 

function debouncing(fn, deley){
    let id;
    return function(e){
       clearTimeout(id);
       id = setTimeout(() => {
          fn(e)
       }, deley)
    }
}

const debounceHandleracio = debouncing((e) => {
    console.log(`Api Called is Query ${e.target.value}`);
}, 1000)

accioInput.addEventListener("input", debounceHandleracio);