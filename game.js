choices = ["rock", "paper", "scissors"];

function getComputerChoice (array) {
    var choiceNumber = Math.floor(Math.random()*array.length);
    var computerChoice = array[choiceNumber];
    return computerChoice;
}

// Gets player's choice via a prompt()
function promptPlayerChoice (array) {
    var playerInput = prompt("Rock, Paper, Scissors?");
    playerInput = playerInput.toLowerCase();

    // Prompt again if we got a string that's not in the array from the user
    while (typeof playerInput == string && array.includes(playerInput) == false) {
        let playerInput = prompt("Come on! Rock, Paper, Scissors?");
    }

    if (typeof playerInput == string) {
        return playerInput;
    }

}
