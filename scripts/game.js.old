function getComputerChoice (array) {
    let choiceNumber = Math.floor(Math.random()*array.length);
    let computerChoice = array[choiceNumber];
    return computerChoice;
}

// Gets player's choice via a prompt()
function getPlayerChoice (array) {
    let playerInput = prompt("Rock, Paper, Scissors?");

    // Prompt again if we got a string that's not in the array from the user
    while (array.includes(playerInput) == false) {
        playerInput = prompt("Come on! Rock, Paper, Scissors?").toLowerCase();
        console.log(playerInput + " " + array.includes(playerInput));
    }

    return playerInput;
}

// Abiding by the real rules of the game and picking a winner based on the 
// player's and computer's choices
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

// Getting choices, deciding winner, then outputting the result to the console
function playRound (choicesArray) {
    let playerChoice = getPlayerChoice(choicesArray);
    let computerChoice = getComputerChoice(choicesArray);

    let winner = decideWinner(playerChoice, computerChoice);
    if (winner == "tie") {
        console.log("You both drew " + playerChoice + ".\nIt's a tie!")
    } else {
        console.log("You drew " + playerChoice + " and computer drew "
             + computerChoice);

        // Announcing the winner
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