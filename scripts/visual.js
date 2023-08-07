function toggleInactivity(id) {
    const el = document.getElementById(id);
    el.classList.toggle("inactive");
    el.classList.toggle("selected");
}

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
    addScore(side);
    announceRound(side);
    changeOpponentStatus(false);
}