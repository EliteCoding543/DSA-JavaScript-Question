function clickPicture(fn){
    setTimeout(() => {
        fn()
        console.log("Click Picture")
    }, 4000)
}

function selectPicture(fn){
    setTimeout(() => {
        fn()
        console.log("Select Picture");
    }, 3000)
}

function applyFillter(fn){
    setTimeout(() => {
        fn()
        console.log("Apply Fillter")
    }, 2000)
}

function chooseCaption(fn){
    setTimeout(() => {
      fn()
      console.log("Choose caption");
    }, 2000)
}

function postPicture(){
    setTimeout(() => {
         console.log("Post Picture");
    }, 1000)
}

clickPicture(() => {
    selectPicture(() => {
        applyFillter(() =>{
            chooseCaption(() => {
                postPicture()
            })
        })
    })
})