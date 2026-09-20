let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("“rock”, “paper” or “scissors”.");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice === computerChoice) {
        console.log("This round is a tie.")
    }
    else if(humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log(`“You lose! ${computerChoice} beats ${humanChoice}”.`)
    }
    else {
        humanScore += 1;
        console.log(`“You Win! ${humanChoice} beats ${computerChoice}”.`)
    }
}


