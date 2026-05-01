// HOF Those function that either accept a fn or return a function 
function hof(){
    const fn = () => {
        console.log("Higher order function")
    }

    return fn
}

let resultfn = hof();
resultfn()


// Those function that are passed inside HOF(higer order function) are called call function.
function hof2(callBack){
    callBack()
}

hof2(() => {
    console.log("This is Call back Function") // This call Back Main Part
});
