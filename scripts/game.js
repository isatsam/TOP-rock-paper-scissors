function pickWinner(player, computer) {
    if (computer == 3 || player == 3) {
        return Math.min(player, computer);
    } else {
        return Math.max(player, computer);
    }  
}

function getPlayerChoice(choice) {
    array = ["rock", "paper", "scissors"];
    if (!array.includes(choice)) {
        console.log("Hey! Play by the rules!");
    } else {
        return array.indexOf(choice);
    }
}

function playRound (playerClick) {
    const computerChoice = () => Math.floor(Math.random() * (4 - 1) + 1);
    const playerChoice = getPlayerChoice(playerClick);
    let winner = decideWinner(playerChoice, computerChoice);
}

