let humanScore = 0;
let computerScore = 0;
// Displays if you lost or won after the game..
const afterGameMessage = document.querySelector('.gameStatus h3');

function getComputerChoice() {
    let num = Math.trunc(Math.random() * 3) + 1;
    switch (num) {
        case 1: return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}

function playRound(humanChoice, computerChoice) {
    // Check for a draw first
    if (humanChoice === computerChoice) {
        afterGameMessage.innerText = "That's a draw!!";
        return; // No score change
    }
    // Check winning conditions for human
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        afterGameMessage.innerText = "You win! Rock beats Scissors.";
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        afterGameMessage.innerText = "You win! Scissors beats Paper.";
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        afterGameMessage.innerText = "You win! Paper beats Rock.";
        humanScore++;
    } 
    // Check losing conditions for human
    else {
        afterGameMessage.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
}

//Runs after a score of 20 whether for the human or the computer
function playGame() {
    if (humanScore === computerScore) {
        console.log("Your score: " + humanScore + " | Computer's score: " + computerScore);
        return "That's a Draw!!";
    } else if (humanScore > computerScore) {
        console.log("Your score: " + humanScore + " | Computer's score: " + computerScore);
        return "You win the game!!";
    } else {
        console.log("Your score: " + humanScore + " | Computer's score: " + computerScore);
        return "You lose the game!";
    }
}


// Functions of the 3 main buttons
const btn = document.querySelectorAll('.play-btn');
const gameChoices = ["ROCK","PAPER","SCISSORS"];

// Variable for manipulating and saving the scores
const score = document.querySelectorAll("span");


btn[0].addEventListener("click",  ()=>{
    playRound(gameChoices[0],getComputerChoice())
    score[0].innerText = humanScore;
    score[1].innerText = computerScore;
});

btn[1].addEventListener("click",  ()=>{
    playRound(gameChoices[1],getComputerChoice())
    score[0].innerText = humanScore;
    score[1].innerText = computerScore;
});

btn[2].addEventListener("click",  ()=>{
    playRound(gameChoices[2],getComputerChoice())
    score[0].innerText = humanScore;
    score[1].innerText = computerScore;
});




