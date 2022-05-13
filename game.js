const computerOptions = ["rock", "paper", "scissors"];

function computerPlay(choice) {
  
  let randomChoice = Math.floor(Math.random() * choice.length);
  
  let i = choice[randomChoice];
  console.log('Computer choice is', i);
  // return i;
}


computerSelection = computerPlay(computerOptions);

// playerSelection = prompt("Please input rock, paper or scissors:".toLowerCase());

//// computerPlay(choices);
// console.log(result);

function playRound(playerSelection, computerSelection) {
  // playerSelection = prompt("Please input rock, paper or scissors:".toLowerCase());
  playerSelection = 'rock';
  console.log('player choice is:', playerSelection)
  if (computerSelection === playerSelection) {
    console.log(tie)
  }
  
playRound();
  

  
  // playerSelection = playerChoice;
  // console.log('Player choice is', playerChoice);

}