function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    }
    else{
        console.log(" Allowed");
        
    }
}

checkAge(26);

// Convert This Function Early Return 

function chAge(vote){
    if(vote < 18){
        return "Too Young";
    }
    else{
        return "Allowed"
    }
}

console.log(chAge(21));
