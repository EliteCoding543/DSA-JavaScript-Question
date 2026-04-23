function rps(user, computer) {
    if(user === computer) return "Draw"

    if(user === "rock" && computer === "Scissor") return "user"
    if(user === "Scissor" && computer === "Papper") return "User"
    if(user === "Papper" && computer === "rock")    return "user"

    return "computer";
}

console.log(rps("Scissor", "Scissor"));
