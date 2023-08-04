// elements
const buttons = document.querySelectorAll('button');

// global variables
let playerScore = 0;
let computerScore = 0;
let currRound = 1;

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

// updates game score and result on screen
function updateScore(res) {
    if (res == "win") playerScore++;
    else if (res == 'lose') computerScore++;

    const playerScoreboard = document.querySelector('.player-score');
    const computeScoreboard = document.querySelector('.computer-score');

    playerScoreboard.textContent = `${playerScore}`;
    computeScoreboard.textContent = `${computerScore}`;
}

// update the selection element for player and computer
function updateSelection(playerSelection, computerSelection) {
    const playerChoice = document.querySelector('.player-choice');
    console.log(playerChoice)
    const computerChoice = document.querySelector('.computer-choice');

    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
}

// update result of game
function updateResult(res) {
    const gameResult = document.querySelector('.game-result');
    console.log(res)
    gameResult.textContent = `you ${res}!`;
}

// update and check for rounds
function updateRounds() {
    ++currRound;
    if (playerScore > 5 || computerScore > 5) {
        alert("Game Over!");
        window.location.reload();
        return;
    }
    const roundCounter = document.querySelector('.round-counter');
    roundCounter.textContent = `${currRound}`;
}

function buttonPressed(e) {
    //console.log(this.classList.value);

    // play a round
    let playerSelection = 'rock';
    if (this.classList.value == 'btn-paper') playerSelection = 'paper';
    else if (this.classList.value == 'btn-scissors') playerSelection = 'scissors';
    let computerSelection = getComputerChoice();

    // update scoreboard 
    let result = playRound(playerSelection, computerSelection)
    updateScore(result);

    // update game selection
    updateSelection(playerSelection, computerSelection);

    // update game result
    updateResult(result);

    // update
    updateRounds();

}

buttons.forEach(btn => btn.addEventListener('click', buttonPressed));