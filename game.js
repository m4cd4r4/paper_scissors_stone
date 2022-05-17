const computerOptions = ["rock", "paper", "scissors"];
playerScore = 0;
computerScore = 0;

// 1 - Automate computer's choice with a random selection from the 3 options above
function computerPlay() { 
  let randomChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log('Computer choice is', randomChoice);
  return randomChoice;
}

// 2 - Play a single round with the computer
function playRound(playerSelection, computerSelection) { 
  
  playerSelection = prompt("Please input rock, paper or scissors:").toLowerCase();
  computerSelection = computerPlay();
  console.log('compPlay is',computerSelection);

  if (playerSelection === computerSelection) {
    return('The game is a tie!');
  }    
  else if ((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'scissors')) 
  {
 
    return('Computer wins!');
  }
  else {
    playerScore += 1;
    return('Player wins!');
  }
}

// 3 - Test the playRound function before continuing to multiple round function
console.log(playRound()); 

// 4 - Play a 5-round game
function game() {  
  
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
    }
  if (playerScore > computerScore) {
    console.log("The player wins!")
  } 
  else if (computerScore > playerScore) {
    console.log("The computer wins!")
  }
}

game();





