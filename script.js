let playerScore = 0;
let computerScore = 0;

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
    let scoreText = " You: " + playerScore + " Computer: " + computerScore;
    let result;

    if (playerSelection === computerChoice) {
        return "It's a draw" + scoreText;
    } 

    if (playerSelection === "rock") {
       if (computerChoice === "paper") {
        ++computerScore;
        result = "You Lose! " + computerChoice + " beats " + playerSelection + scoreText;
       } else {
        ++playerScore;
        result = "You Win! " + playerSelection + " beats " + computerChoice + scoreText;
       }
    }

    if (playerSelection === "paper") {
        if (computerChoice === "scissors") {
            ++computerScore;
            result = "You Lose! " + computerChoice + " beats " + playerSelection + scoreText;
           } else {
            ++playerScore;
            result =  "You Win! " + playerSelection + " beats " + computerChoice + scoreText;
           }
    }

    if (playerSelection === "scissors") {
        if (computerChoice === "rock") {
            ++computerScore;
            result = "You Lose! " + computerChoice + " beats " + playerSelection + scoreText;
           } else {
            ++playerScore;
            result = "You Win! " + playerSelection + " beats " + computerChoice + scoreText;
           }
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