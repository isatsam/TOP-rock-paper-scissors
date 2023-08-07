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
}