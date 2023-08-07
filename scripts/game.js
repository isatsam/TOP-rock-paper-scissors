function getComputerChoice () {
    array = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random()*array.length);
    let computerChoice = array[choiceNumber];
    return computerChoice;
}

// Protection against console
function setPlayerChoice (choice) {
    array = ["rock", "paper", "scissors"]
    while (!array.includes(choice)) {
        console.log("Hey! Play by the rules!");
    }

    return choice;
}

function decideWinner (playerChoice, computerChoice) {
    let winner;

    if (playerChoice == computerChoice) {
        winner = "tie";
    }
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            winner = "player";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "player";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            winner = "player";
        }
    }

    if (winner != "tie" && winner != "player") {
        winner = "computer"
    }

    return winner;
}

function playRound () {
    choicesArray = ["rock", "paper", "scissors"]
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