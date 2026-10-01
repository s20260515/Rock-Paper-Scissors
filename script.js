let humanScoreTotal = 0;
let computerScoreTotal = 0;

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
    if(humanChoice === computerChoice) {
        text.textContent = "This round is a tie.";
    }
    else if(humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "scissors" && computerChoice === "rock") {
        computerScoreTotal += 1;
        computerScore.textContent = `Computer: ${computerScoreTotal}`;
        text.textContent = `You Lose! ${computerChoice} beats ${humanChoice}”.`;
    }
    else {
        humanScoreTotal += 1;
        humanScore.textContent = `Player: ${humanScoreTotal}`;
        text.textContent = `You Win! ${humanChoice} beats ${computerChoice}”.`;
    }

    if(humanScoreTotal + computerScoreTotal == 5){
        text.textContent = humanScoreTotal > computerScoreTotal ? 'Game Over, You Win!' : 'Game Over, You Lose!';
        form.removeChild(rockBtn);
        form.removeChild(scissorsBtn);
        form.removeChild(paperBtn);
        let restartBtn = document.createElement('button');
        restartBtn.textContent = "Play Again";
        form.appendChild(restartBtn);
        restartBtn.addEventListener('click', event => {
            event.stopPropagation();
        })

    }
}

const body = document.querySelector('body');

const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
const text = document.createElement('p');
text.textContent = "First to score 5 points wins the game";

const scoreUI = document.createElement('div');
const humanScore = document.createElement('p');
humanScore.textContent = `Player: ${humanScoreTotal}`;
const computerScore = document.createElement('p');
computerScore.textContent = `Computer: ${computerScoreTotal}`;
scoreUI.append(humanScore, computerScore);

const form = document.createElement('form');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'rock';
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'scissors';
const paperBtn = document.createElement('button');
paperBtn.textContent = 'paper';

form.append(rockBtn, scissorsBtn, paperBtn);
body.append(title, text, scoreUI, form);

form.addEventListener('click', event => {
    event.preventDefault();
    playRound(event.target.textContent, getComputerChoice());
})