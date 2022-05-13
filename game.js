const computerOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log('Computer choice is', randomChoice);
  return randomChoice;
}


function playRound(playerSelection, computerSelection) {
  
  playerSelection = prompt("Please input rock, paper or scissors:").toLowerCase();
  console.log('playSelect is', playerSelection);

  computerSelection = computerPlay();
  console.log('compPlay is',computerSelection);

  if (playerSelection === computerSelection) {
    console.log('The game is a tie!');
  }    
  else if ((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
    console.log('Computer wins!');
  }
  else {
    console.log('Player wins!');
  }

}