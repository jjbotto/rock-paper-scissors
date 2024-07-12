let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll(".choices button");
const playerSelection = document.getElementById("player-selection");
const computerSelection = document.getElementById("computer-selection");
const roundResult = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const score = document.querySelector(".score");
const winner = document.createElement("h2");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";

playerChoices.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber > 66) {
        return "rock";
    }
    else if (randomNumber > 33) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelection.textContent = "";
    computerSelection.textContent = "";
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    roundResult.textContent = "";
    winner.textContent = "";
    resetButton.remove();
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {

        if (playerScore === 5) {
            winner.textContent = "YOU WIN THE GAME!";
            score.appendChild(winner);
        }
        else {
            winner.textContent = "YOU LOSE THE GAME!";
            score.appendChild(winner);
        }
        score.appendChild(resetButton);

        resetButton.addEventListener("click", () => resetGame());
    }

}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    playerSelection.textContent = `Player chose: ${playerChoice}`;
    computerSelection.textContent = `Computer chose: ${computerChoice}`;

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult.textContent = "You win the round!";
        playerScore += 1;
    }
    else if (playerChoice === computerChoice) {
        roundResult.textContent = "It's a tie!";
    }
    else {
        roundResult.textContent = "You lose the round!";
        computerScore += 1;
    }
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

    checkWinner();
}

