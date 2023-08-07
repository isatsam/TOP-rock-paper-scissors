function pickWinner(player, computer) {
    if (computer == player) { 
        // Equals = tie
        return "tie";
    } else if (computer == 3 || player == 3) {
        // Biggest value = winner
        if (computer < player) { return "player"; };
    } else { 
        // Smallest value = winner
        if (computer > player) { return "player"; };
    }
    return "computer";
}

function playRound(playerClick) {
    const computerChoice = () => Math.floor(Math.random() * (4 - 1) + 1);
    let winner = pickWinner(playerClick, computerChoice);
    addScore(winner);
}