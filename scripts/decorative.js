/* This code affects activity ("clickability") of player's choices and
    highlights the opponent's choice in this round. These visual changes can be
    considered non-crucial, and aren't necessary to be able to play the game */

function toggleInactivity(id) {
    const el = document.getElementById(id);
    el.classList.toggle("inactive");
    el.classList.toggle("selected");
}
