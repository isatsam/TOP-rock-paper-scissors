/* This code makes such visual changes that can be considered crucial for the game
    to be played, such as announcing the winner of this round, the winner of this game,
    the current score, and so on. */

/* -------------------------------------- */
/* Update page while the game haven't ended yet */
function addScore(side) {
    if (side == "tie") { return; }
    const score = document.getElementById(side + "Score");
    score.textContent = +(score.textContent) + 1;
}

function announceRound(result, gameEnd) {
    const announcement = document.getElementById("announcement");
    if (result == "tie") { announcement.textContent = "Tie!"; }
    else { 
        result = result.slice(0, 1).toUpperCase() + result.slice(1);
        if (announcement.textContent.includes(result)) {
            announcement.textContent = `${result} won this round again!` 
        } else {
        announcement.textContent = `${result} won this round!` 
        }
    }
}

function changeOpponentStatus(gameRestarted) {
    const status = document.getElementById("opponentStatus");
    if (gameRestarted == true) {
        status.textContent = "Opponent is waiting for you...";
    } else {
        let statuses = [
            "Opponent is waiting for you...",
            "Opponent is staring at your hand...",
            "Opponent is trying to predict the future...",
            "Opponent is fidgeting...", 
            "Opponent convinces itself that you're cheating...", 
            "", "", "", "", "", "", "", "", "", ""
            // 5 in 15 chance for a unique status, otherwise nothing is displayed
        ];
        let newStatusIndex = Math.floor(Math.random() * (statuses.length - 0) + 0);
        status.textContent = statuses[newStatusIndex];
    }
}

/* Call all visual changes when the game didn't end */
function updatePage(side) {
    announceRound(side);             // Change announcement
    changeOpponentStatus(false);     // Change opponent's status to a randomly picked one
}

/* -------------------------------------- */
/* Update page once the game has ended (5 rounds have been played) */
function announceWinner (winner) {
    if (winner != "Tie") {
        document.getElementById("announcement").textContent = `${winner} won! Congratulations to the winner!`
    } else {
        document.getElementById("announcement").textContent = "It's a tie... Better luck next time!"
    }
}

/* Call all visual changes after the game ended,
    (!) announce winner (!) */
function endGame() {
    const playerScore = document.getElementById("playerScore").textContent;
    const opponentScore = document.getElementById("opponentScore").textContent;
    let winner = "";
    if (playerScore > opponentScore) {
        winner = "Player";
    } else if (playerScore < opponentScore) {
        winner = "Opponent";
    } else {
        winner = "Tie"
    }

    announceWinner(winner);     // Change announcement
    changeOpponentStatus(true); // Set opponent's status to default

    toggleAllPlayer();
    setTimeout(function() {
        resetVisuals();
        toggleAllPlayer();
    }, 2000);
}

/* -------------------------------------- */
/* Do all of this AFTER the game has ended and has been concluded */
function resetScore () {
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("opponentScore").textContent = "0";
}

function resetAnnouncement() {
    document.getElementById("announcement").textContent = "Rock, paper, scissors?";
}

function resetCount () {
    currentRoundCount = 0;
}

function resetOpponentChoices() {
    ["Rock", "Paper", "Scissors"].forEach(function(choice) {
        document.getElementById("opponent" + choice).classList.remove("selected");
    })
}

function resetVisuals () {
    resetScore();
    resetAnnouncement();
    resetCount();
    resetOpponentChoices();
}