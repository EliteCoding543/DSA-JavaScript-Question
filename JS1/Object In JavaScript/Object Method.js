let person = {
    name : "Shubham",
    age : 22,

    greet : function(){
        console.log("Hello " + this.name) // this → person object को refer कर रहा है
    }
}

person.greet()