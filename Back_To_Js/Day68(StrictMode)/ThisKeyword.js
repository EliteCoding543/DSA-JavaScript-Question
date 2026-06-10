"use strict"

function checkThis(){
    console.log(this)
}

checkThis()

let obj = {
    name : "shubham", 
    age : 23,

    checkThis : function(){
        console.log(this)
    },

    checkThis2 : () =>  {
          console.log(this)
    },

    checkThis3 : function() {
        const fn = () => {
            console.log(this)
        }
    },

    checkThis4 : () => {
        function fn(){
            console.log(this)
        }

        fn()
    }
}

obj.checkThis()
obj.checkThis2()
obj.checkThis3()
obj.checkThis4()
