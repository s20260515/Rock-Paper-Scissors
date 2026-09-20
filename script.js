function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    switch(result){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        default:
            return "paper";
    }
}
// 