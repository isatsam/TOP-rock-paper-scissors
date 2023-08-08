function getOpponentChoice () {
    let array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * (array.length - 1) + 1)];
}