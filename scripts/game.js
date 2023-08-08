let currentRoundCount = 0;

function pickWinner(playerClick, opponentChoice) {
    let array = ["rock", "paper", "scissors"];
    if (!array.includes(playerClick)) {
        console.log("Play by the rules!");
        return;
    }
    let winner;

    if (playerClick == opponentChoice) {
        winner = "tie";
    }
    if (playerClick == "rock") {
        if (opponentChoice == "scissors") {
            winner = "player";
        }
    } else if (playerClick == "paper") {
        if (opponentChoice == "rock") {
            winner = "player";
        }
    } else if (playerClick == "scissors") {
        if (opponentChoice == "paper") {
            winner = "player";
        }
    }

    if (winner != "tie" && winner != "player") {
        winner = "opponent"
    }

    return winner;
}

function getOpponentChoice () {
    let array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * (array.length - 1) + 1)];
}

function playRound(playerClick) {
    let opponentChoice = getOpponentChoice();
    let winner = pickWinner(playerClick, opponentChoice);
    currentRoundCount = currentRoundCount + 1;
    addScore(winner); // This is the only "visual" function that we call inside game logic
    console.log(winner);
    console.log("Player's choice: " + playerClick)
    console.log("Opponent's choice: " + opponentChoice)

    toggleRoundResults(playerClick, opponentChoice);
    toggleAllPlayer();
    setTimeout(function() {
        toggleAllPlayer();
        toggleRoundResults(playerClick, opponentChoice);
    }, 500);


    if (currentRoundCount >= 5) {
        endGame(winner);
    } else {
        updatePage(winner);
    }
}