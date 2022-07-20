let playerScore = 0;
let computerScore = 0;
let scoreText = " You: " + playerScore + " Computer: " + computerScore;

function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random()*3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerChoice) {
    let result = "";

    if (playerSelection === computerChoice) {
        result = "It's a draw" + scoreText;
    } 
    
    if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || 
    (playerSelection === "scissors" && computerChoice === "paper")) {
        ++playerScore;
        console.log("Player: " + playerScore);
        result = "You Win! " + playerSelection + " beats " + computerChoice + scoreText;
    } else {
        ++computerScore;
        console.log("Computer: " + computerScore);
        result = "You Lose! " + computerChoice + " beats " + playerSelection + scoreText; 
    }
    return result;
}

function game() {
    const playerSelection = prompt("Type Rock, Paper or Scissors");
    const selectionToLower = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(playRound(selectionToLower, computerChoice));
    
}


for (let i = 0; i < 5; i++) {
    game();
}