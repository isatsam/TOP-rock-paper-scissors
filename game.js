choices = ["rock", "paper", "scissors"];

function getComputerChoice (array) {
    var choiceNumber = Math.floor(Math.random()*array.length);
    var computerChoice = array[choiceNumber];
    return computerChoice;
}
