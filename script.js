computerScore = 0; 
playerScore= 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock"
    }else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// console.log(getComputerChoice())
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
// console.log(playerSelection())

function playRound(player,computer) {
    // compare player and computer selection 
    let n = 0
    if ((player === "Rock" && computer === "Scissors") ||(player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")){
        playerScore++;
        // console.log(playerScore);
        return `Winner!! ${player} beats ${computer}`;
     }else if((player === "Scissors" && computer === "Rock") ||(player === "Paper" && computer === "Scissors") || (player === "Rock" && computer === "Paper")) {
        computerScore++;
        return `You lose! ${computer} beats ${player}`;
     } else if (player === computer) {
        return `Tie game`;
     }
}

// console.log(playRound(playerSelection(), getComputerChoice()));

function game() {
    // plays five round of games
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(), getComputerChoice()));
    }
    if(playerScore > computerScore){
        console.log("you win😊!!!")
    }else if(computerScore > playerScore){
        console.log("Computer won!!!")
    }else {
        console.log ("It's a tie game")
    }
}

game();