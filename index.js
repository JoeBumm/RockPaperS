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
    if (humanScore < 3 && computerScore < 3) {
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
else {
    const container = document.querySelector('.container');
    const header = document.querySelector('h1');// h1 because its used once in the html
    const gameMsg = playGame();
    const centerElementsForBeauty = document.querySelector('.gameStatus h3');
    console.log(centerElementsForBeauty);
    afterGameMessage.innerText = gameMsg;
    container.style.display = 'none';
    header.style.display= 'none';
    centerElementsForBeauty.style.fontSize = '70px';
    centerElementsForBeauty.style.marginTop = '90px';
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

// Variable for manipulating and saving the scores, span is used to manipulate only numbers
const score = document.querySelectorAll("span");

// basic event on click callback function and updating scores
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

