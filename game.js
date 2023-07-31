choices = ["rock", "paper", "scissors"];

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
    let playerWin;
    let tie;

    if (playerSelection == computerSelection) {
        tie = true;
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerWin = true;
}
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWin = true;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerWin = true;
        }
    }

    let result = [playerWin, tie];

    return result;
}

