'use strict';

const btn = document.querySelectorAll('.btn');
const message = document.querySelector('.message');
const playScore = document.querySelector('.score--1');
const compScore = document.querySelector('.score--2');
const newGame = document.querySelector('.new');

let playing, computerScore, playerScore;

const init = function () {
  computerScore = 0;
  playerScore = 0;
  compScore.textContent = 0;
  playScore.textContent = 0;
  message.textContent = '';
  playing = true;
};

init();

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'Rock';
  } else if (randomNumber === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
btn.forEach(button =>
  button.addEventListener('click', function () {
    let player = this.textContent;
    console.log(player);
    if (playing === true) {
      playRound(player, getComputerChoice());
      if (computerScore >= 5) {
        playing = false;
        message.textContent = `Humanity is destroyed💔🤖`;
      } else if (playerScore >= 5) {
        playing = false;
        message.textContent = `Humanity is saved 😋🏆`;
      }
    }
  })
);
// console.log(getComputerChoice())

function playRound(player, computer) {
  // compare player and computer selection
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  ) {
    playerScore++;
    playScore.textContent = playerScore;
    // console.log(playerScore);
    message.textContent = `Winner!! ${player} beats ${computer}`;
  } else if (
    (player === 'Scissors' && computer === 'Rock') ||
    (player === 'Paper' && computer === 'Scissors') ||
    (player === 'Rock' && computer === 'Paper')
  ) {
    computerScore++;
    compScore.textContent = computerScore;
    // console.log(computerScore)
    message.textContent = `You lose! ${computer} beats ${player}`;
  } else if (player === computer) {
    message.textContent = `Tie game`;
  }
}
newGame.addEventListener('click', init);
