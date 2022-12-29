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
    // pass user input through the lower case converter
    //  return the processed user
}

function playRound(player,computer) {
    // compare player and computer selection 
    // Rock beat scissors
    // scissors beat paper
    // paper beat rock
}

function game() {
    // plays five round of games
    // keep scores
    // declare the winner
}