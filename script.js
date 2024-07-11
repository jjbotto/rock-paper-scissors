let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll(".choices button");
const playerSelection = document.getElementById("player-selection");
const computerSelection = document.getElementById("computer-selection");
const roundResult = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const score = document.querySelector(".score");


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

    if (playerScore === 5 || computerScore === 5) {
        let winner = document.createElement("h2");

        if (playerScore === 5) {
            winner.textContent = "YOU WIN THE GAME!";
            score.appendChild(winner);
        }
        else {
            winner.textContent = "YOU LOSE THE GAME!";
            score.appendChild(winner);
        }
    }

}

// function playGame() {    
//     let computerScore = 0;
//     let playerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         playRound(getPlayerChoice(), getComputerChoice());
//     }

//     console.log("Computer: " + computerScore + " Player: " + playerScore);
//     if (playerScore > computerScore) {
//         console.log("You won the game!");
//     }
//     else if (computerScore > playerScore) {
//         console.log("You lose the game!");
//     }
//     else {
//         console.log("Tie game!");
//     }

//     function playRound(playerChoice, computerChoice) {
//         playerChoice = playerChoice.toLowerCase();
    
//         if (playerChoice === "rock") {
//             switch (computerChoice) {
//                 case "paper":
//                     console.log("You lose! Paper beats Rock!");
//                     computerScore += 1;
//                     break;
//                 case "scissors":
//                     console.log("You win! Rock beats Scissors!");
//                     playerScore += 1;
//                     break;
//                 case "rock":
//                     console.log("Tie!");
//                     break;
//             }
//         }
    
//         else if (playerChoice === "paper") {
//             switch (computerChoice) {
//                 case "paper":
//                     console.log("Tie!");
//                     break;
//                 case "scissors":
//                     console.log("You lose! Scissors beats paper!");
//                     computerScore += 1;
//                     break;
//                 case "rock":
//                     console.log("You win! Paper beats rock!");
//                     playerScore += 1;
//                     break;
//             }
//         }
    
//         else {
//             switch (computerChoice) {
//                 case "paper":
//                     console.log("You win! Scissors beats paper!");
//                     playerScore += 1;
//                     break;
//                 case "scissors":
//                     console.log("Tie!");
//                     break;
//                 case "rock":
//                     console.log("You lose! Rock beats scissors!");
//                     computerScore += 1;
//                     break;
//             }
//         }
    
//     }
// }

// playGame();