playerScore = 0;
computerScore = 0;

// Get random choice from 1 to 3
let getComputerChoice =  () => {
    let value = Math.floor(Math.random() * 3) + 1
    let result 

    if (value == 1) {
        result = "rock"
    } else if (value == 2) {
        result = "paper"
    } else {
        result = "scissors"
    }
    return result
}

let playRound = (humanChoice, computerChoice) => {
    let result

    //Rule set
    if (humanChoice === computerChoice) {
        result = "Draw"
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice == "rock" 
    || humanChoice === "scissors" && computerChoice === "paper") {
        result = "Player Wins!"
        playerScore += 1
    } else {
        result = "Computer Wins!"
        computerScore += 1
    }

    return result
}

playerText = document.createElement("p");
computerText = document.createElement("p");

const choicesMade = document.querySelector(".choices-made")
const winner = document.querySelector(".winner")


// Event listeners for buttons
const humanChoices = document.querySelectorAll(".choice")

humanChoices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (playerScore === 0 || computerScore === 0) {
            winner.textContent = ""
        }
        computerChoicePlaceholder = getComputerChoice()
        roundWinner = playRound(e.target.classList[1], computerChoicePlaceholder);
        const score = document.querySelector(".scores");

        playerText.textContent = `Player chose: ${e.target.classList[1]}`
        computerText.textContent = `Computer chose: ${computerChoicePlaceholder}`

        choicesMade.appendChild(playerText);
        choicesMade.appendChild(computerText)

        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = (playerScore > computerScore) ? "Player Wins!" : "Computer Wins";
            resetGame()
        }
    })
})

