function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") return "tie";
        else if (computerSelection == "paper") return "lose";
        return "win";
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") return "win";
        else if (computerSelection == "paper") return "tie";
        return "lose";
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") return "lose";
        else if (computerSelection == "paper") return "win";
        return "tie";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("your move");
        let computerSelection = getComputerChoice();
        alert(`Computer: ${computerSelection}, you ${playRound(playerSelection, computerSelection)}`);
    }
}

game();