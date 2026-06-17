const input = document.getElementById("ip");
const btn = document.getElementById("btn");

function throtlled(fn, deley){
    let last = 0;

    return function(e){
       let now = Date.now()
       if(now - last <= deley){
         return
       }

       last = now
       fn(e)
    }
}

let throtllingHandler = throtlled(() => {
    console.log("ok")
}, 2000)

let throtlliInput = throtlled((e) => {
    console.log(`api called is query ${e.target.value}`);
}, 2000)

btn.addEventListener("click", throtllingHandler);
input.addEventListener("input", throtlliInput);