// throw new Error("This is Custom error");

class AccioError extends Error{
    constructor(m, n){
        super(m)
        this.name = n;
    }
}

//  Jitna bhi error hoga try catch m likho taki issues na ho 
try{
    throw new AccioError("Custom error", "username error");
} catch(error){
    console.log(error.name)
}

console.log("important code");