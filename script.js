let playerScore = 0;
let computerScore = 0;
let scoreText = "";

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
    const resultText1 = document.querySelector('.result-text-1');
    const resultText2 = document.querySelector('.result-text-2');

    if (playerSelection === computerChoice) {
        resultText1.innerText = "It's a draw";
        resultText2.innerText = "Try Again."
    } else if ((playerSelection === "rock" && computerChoice === "scissors") || (playerSelection === "paper" && computerChoice === "rock") || 
    (playerSelection === "scissors" && computerChoice === "paper")) {
        ++playerScore;
        resultText1.innerText = "You Win!";
        resultText2.innerText = playerSelection + " beats " + computerChoice;
        document.querySelector('#player-score').innerText = playerScore;

    } else {
        ++computerScore; 
        resultText1.innerText = "You Lose!";
        resultText2.innerText = computerChoice + " beats " + playerSelection;
        document.querySelector('#computer-score').innerText = computerScore;
    }
    return result;
}


function game() {
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));

    document.querySelector('#player-image').innerText = document.getElementById(playerChoice).innerText;
    document.querySelector('#computer-image').innerText = document.getElementById(computerChoice).innerText;
}


//1. Add event listener to each button
//2. Use (e) event to target the ID of the button clicked and make that 
//equal to the player selection 

//3. Then allow the computer to make its own choice
//4. Change the image in the scores to match the player and computer choices

//5. Run a round and make sure all the text reflects the round that was played


const choices = document.querySelectorAll('.choice');


choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        playerChoice = e.target.id;

        if (playerScore + computerScore === 5) {
            alert("Play Again?");
            window.location.reload();
        } else {
            game();
        }
            
      
    })
});

// Remove the previous image using selector ID
// Then get the choice of the player by ID and store it
// Then append it to the PLAYER SCORE









