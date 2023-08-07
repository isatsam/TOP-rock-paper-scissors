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
}