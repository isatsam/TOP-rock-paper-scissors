function getComputerChoice (array) {
    var choiceNumber = Math.floor(Math.random()*array.length);
    var computerChoice = array[choiceNumber];
    return computerChoice;
}

// Gets player's choice via a prompt()
function promptPlayerChoice (array) {
    var playerInput = prompt("Rock, Paper, Scissors?");
    playerInput = playerInput.toLowerCase();

    // Prompt again if we got a string that's not in the array from the user
    while (typeof playerInput == string && array.includes(playerInput) == false) {
        let playerInput = prompt("Come on! Rock, Paper, Scissors?");
        // Forgive player for not entering anything twice in a row
        if (typeof playerInput != string) {
            console.log("You refused to play... Refresh the page to try again.")
        }
    }

    return playerInput;
}

function playRound (playerSelection, computerSelection) {
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

function game () {
    choices = ["rock", "paper", "scissors"];
    let playerChoice = promptPlayerChoice(choices);
    let computerChoice = getComputerChoice(choices);
    
    for (let i = 0; i < 5; i++) {
        let winner = playRound(playerChoice, computerChoice);
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
}