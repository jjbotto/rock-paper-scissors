console.log("Hello world!");



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

function getPlayerChoice() {
    choice = prompt("Rock, Paper, or Scissors?");

    return choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                console.log("You lose! Paper beats Rock!");
                computerScore += 1;
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors!");
                playerScore += 1;
                break;
            case "rock":
                console.log("Tie!");
                break;
        }
    }

    else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "paper":
                console.log("Tie!");
                break;
            case "scissors":
                console.log("You lose! Scissors beats paper!");
                computerScore += 1;
                break;
            case "rock":
                console.log("You win! Paper beats rock!");
                playerScore += 1;
                break;
        }
    }

    else {
        switch (computerChoice) {
            case "paper":
                console.log("You win! Scissors beats paper!");
                playerScore += 1;
                break;
            case "scissors":
                console.log("Tie!");
                break;
            case "rock":
                console.log("You lose! Rock beats scissors!");
                computerScore += 1;
                break;
        }
    }

}

function playGame() {    
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    console.log("Computer: " + computerScore + " Player: " + playerScore);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("Tie game!");
    }

    function playRound(playerChoice, computerChoice) {
        playerChoice = playerChoice.toLowerCase();
    
        if (playerChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    console.log("You lose! Paper beats Rock!");
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors!");
                    playerScore += 1;
                    break;
                case "rock":
                    console.log("Tie!");
                    break;
            }
        }
    
        else if (playerChoice === "paper") {
            switch (computerChoice) {
                case "paper":
                    console.log("Tie!");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper!");
                    computerScore += 1;
                    break;
                case "rock":
                    console.log("You win! Paper beats rock!");
                    playerScore += 1;
                    break;
            }
        }
    
        else {
            switch (computerChoice) {
                case "paper":
                    console.log("You win! Scissors beats paper!");
                    playerScore += 1;
                    break;
                case "scissors":
                    console.log("Tie!");
                    break;
                case "rock":
                    console.log("You lose! Rock beats scissors!");
                    computerScore += 1;
                    break;
            }
        }
    
    }
}

playGame();