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

function playRound(playerClick) {
    let opponentChoice = getOpponentChoice();
    let winner = pickWinner(playerClick, opponentChoice);
    currentRoundCount = currentRoundCount + 1;
    console.log(winner);
    console.log("Player's choice: " + playerClick)
    console.log("Opponent's choice: " + opponentChoice)

    addScore(winner);

    if (currentRoundCount >= 5) {
        endGame(winner);
    } else {
        updatePage(winner);
    }
}