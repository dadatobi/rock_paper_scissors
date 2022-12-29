function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock"
    }else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())
function playerSelection() {
    // Use prompt to get user input
    const input = prompt("please enter your choice between 'Rock, Paper or Scissors': ")
    const inputLower = input.toLowerCase();
    const player = inputLower[0].toUpperCase() + inputLower.slice(1);
    if(player === "Rock") {
        return player;
    }else if (player === "Scissors") {
        return player;
    }else if(player === "Paper") {
        return player;
    }else {
        alert("Wrong input, enter Paper, Rock or Scissors")
        return playerSelection();
    }
}
console.log(playerSelection())

function playRound(player,computer) {
    // compare player and computer selection 
    // if (player === "Rock" && computer === "Scissor"){

    // }
    // Rock beat scissors
    // scissors beat paper
    // paper beat rock
}

function game() {
    // plays five round of games
    // keep scores
    // declare the winner
}