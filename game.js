function getComputerChoice (array) {
    let choiceNumber = Math.floor(Math.random()*array.length);
    let computerChoice = array[choiceNumber];
    return computerChoice;
}

// Gets player's choice via a prompt()
function promptPlayerChoice (array) {
    let playerInput = prompt("Rock, Paper, Scissors?");

    // Prompt again if we got a string that's not in the array from the user
    while (array.includes(playerInput) == false) {
        playerInput = prompt("Come on! Rock, Paper, Scissors?").toLowerCase();
        console.log(playerInput + " " + array.includes(playerInput));
    }

    return playerInput;
}

function decideWinner (playerSelection, computerSelection) {
    let winner;

    if (playerSelection == computerSelection) {
        winner = "tie";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            winner = "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            winner = "player";
        }
    }

    if (winner != "tie" && winner != "player") {
        winner = "computer"
    }

    return winner;
}

function playRound (choicesArray) {
    let playerChoice = promptPlayerChoice(choicesArray);
    let computerChoice = getComputerChoice(choicesArray);

    let winner = decideWinner(playerChoice, computerChoice);
    if (winner == "tie") {
        console.log("You both drew " + playerChoice + ".\nIt's a tie!")
    } else {
        console.log("You drew " + playerChoice + " and computer drew " + computerChoice);
        if (winner == "computer") {
            console.log("Computer won! Sorry about that!");
        } else {
            console.log("You won! Congratulations!");
        }
    }
}

function game (rounds) {
    choices = ["rock", "paper", "scissors"];
    for (let i = 0; i <= rounds; i++) {
        playRound(choices)
    }
}

game(5)