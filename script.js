function getComputerChoice() {
    let result = Math.ceil(Math.random() * 3);
    switch(result){
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "paper";
    }
}

function getHumanChoice() {
    return prompt("“rock”, “paper” or “scissors”.")
}
