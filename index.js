let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.trunc(Math.random() * 3) + 1;
    switch (num) {
        case 1: return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toUpperCase();
    while (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS") {
        humanChoice = prompt("I think you mistyped something. Please enter Rock, Paper, or Scissors:").toUpperCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // Check for a draw first
    if (humanChoice === computerChoice) {
        console.log("That's a draw!!");
        return; // No score change
    }

    // Check winning conditions for human
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } 
    // Check losing conditions for human
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

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

// // Main game loop
// for (let i = 0; i < 3; i++) { // Loop for 3 rounds
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
// }

// Final game result
console.log(playGame());
console.log("Do you want to start the game? Let's go!");