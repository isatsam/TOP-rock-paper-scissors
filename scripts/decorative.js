/* This code affects activity ("clickability") of player's choices and
    highlights the opponent's choice in this round. These visual changes can be
    considered non-crucial, and aren't necessary to be able to play the game */

function toggleInactivity(id) {
    const el = document.getElementById(id);
    el.classList.toggle("inactive");
}

// Trying to make all elements unclickable but it doesn't work for some reason /shrug
function toggleAllPlayer () {
    toggleInactivity("playerRock");
    toggleInactivity("playerPaper");
    toggleInactivity("playerScissors");
}


function toggleOpponent (opponentChoice) {
    if (opponentChoice == "rock") { opponent = "Rock" } 
    else if (opponentChoice == "paper") { opponent = "Paper" } 
    else { opponent = "Scissors"}
    opponent = "opponent" + opponent
    document.getElementById(opponent).classList.toggle("selected");

    console.log("Toggled opponent's choice")
}