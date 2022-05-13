const computerOptions = ["rock", "paper", "scissors"];

// Automate computer's choice with a random selection from the 3 options above

function computerPlay() {
  let randomChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log('Computer choice is', randomChoice);
  return randomChoice;
}

// Play a single round with the computer

function playRound(playerSelection, computerSelection) {
  
  playerSelection = prompt("Please input rock, paper or scissors:").toLowerCase();
  // console.log('playSelect is', playerSelection);

  computerSelection = computerPlay();
  console.log('compPlay is',computerSelection);

  if (playerSelection === computerSelection) {
    return('The game is a tie!');
  }    
  else if ((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
    return('Computer wins!');
  }
  else {
    return('Player wins!');
  }

}

// Test the playRound function before continuing to multiple round function
console.log(playRound());


