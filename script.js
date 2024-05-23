playerScore = 0
computerScore = 0

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


let getHumanChoice = () => {
    let playerChoice = prompt("Choose rock, paper or scissors!")
    return playerChoice.toLowerCase()
};


let playRound = (humanChoice, computerChoice) => {
    let result

    //Rule set
    if (humanChoice === computerChoice) {
        result = "Draw"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "Computer Wins!"
        computerScore += 1
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = "Player Wins!"
        playerScore += 1
    } else {
        result = "Computer Wins!"
        computerScore += 1
    }

    console.log(humanChoice, computerChoice)

    return result
}

let playGame = () => {
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`)
    }
    console.log(" ")
    if (playerScore > computerScore) { console.log("Player Wins!")}
    else { console.log("Computer Wins!")}
}

playGame()
