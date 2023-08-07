let currentRoundCount = 0;

function pickWinner(playerClick, opponent) {
    let array = ["rock", "paper", "scissors"];
    let player = array.indexOf(playerClick);
    if (opponent == player) { 
        // Equals = tie
        return "tie";
    } else if (opponent == 3 || player == 3) {
        // Biggest value = winner
        if (opponent < player) { return "player"; };
    } else { 
        // Smallest value = winner
        if (opponent > player) { return "player"; };
    }
    return "opponent";
}

function getOpponentChoice () {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function playRound(playerClick) {
    let opponentChoice = getOpponentChoice()
    let winner = pickWinner(playerClick, opponentChoice);
    currentRoundCount = currentRoundCount + 1;
    addScore(winner); // This is the only "visual" function that we call inside game lo
    if (currentRoundCount >= 5) {
        endGame(winner);
    } else {
        updatePage(winner);
    }
}