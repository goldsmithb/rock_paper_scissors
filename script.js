/**
 * In our UI, the player should be able to play the game by 
 * clicking on buttons rather than typing their answer in a 
 * prompt.

    For now, remove the logic that plays exactly five rounds.

    Create three buttons, one for each selection. Add an event
    listener to the buttons that call your playRound function
    with the correct playerSelection every time a button is
    clicked. (you can keep the console.logs for this step)

    Add a div for displaying results and change all of your
    console.logs into DOM methods.

    Display the running score, and announce a winner of
    the game once one player reaches 5 points.

    You will likely have to refactor (rework/rewrite) your
    original code to make it work for this. That’s OK!
    Reworking old code is an important part of a programmer’s
    life.

 */

/**
 * getCompuetChoice() : generate a random valid move for use by computer player
 * @returns a valid move
 */
function getComputerChoice () {
  let choice = Math.floor(Math.random()*3);
  switch(choice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

// Return the score from perspective of player A's move
// There must be a better way to code this logic --- TODO
function scoreA(A, B) {
  if (A === "rock") {
    if (B === "rock") return "draw";
    else if (B === "paper") return "lose";
    else if (B === "scissors") return "win";
  } else if (A === "paper") {
    if (B === "rock") return "win";
    else if (B === "paper") return "draw";
    else if (B === "scissors") return "lose";
  } else if (A === "scissors") {            
    if (B === "rock") return "lose";
    else if (B === "paper") return "win";
    else if (B === "scissors") return "draw";
  }
  return "incorrect input";
}
/** playRoud()
 * Simulate round and calculate winner
 * Side Effects: playerScore and computerScore variables are updated
 * */
function playRound(playerMove, computerMove) {
  playerMove = playerMove.toLowerCase();
  computerMove = computerMove.toLowerCase();

  switch (scoreA(playerMove, computerMove)) {
    case "win" :
        playerScore +=1 ;
        return `Nice job! ${playerMove} beats ${computerMove}!`;
    case "lose" :
      computerScore += 1;
      return `Aw dang! ${computerMove} beats ${playerMove}!`;
    case "draw" :
      return "Draw! Try again";
    default :
      // Only reached if input was not a valid move
      computerScore += 1;
      return "Invalid move! You lose.";
  }
}

/*      GLOBAL VARIABLES        */
let round = 1;
let playerScore = 0;
let computerScore = 0;
let playerMove = '';
let computerMove = '';

function game() {
  function displayScore() {
    console.log(`Round: ${round}\n Player: ${playerScore}\t Computer: ${computerScore}`);
  }

  console.log("Let's play a new game of \'Rock, Paper, Scissors!\'!");
  
  for (round; round < 5; round++) {
    displayScore();
    // get player input
    while (!(playerMove = prompt("Enter your move!"))) {
      console.log("No input entered. Retrying.")
    }
    computerMove = getComputerChoice();
    console.log(playRound(playerMove, computerMove));
  }
  displayScore();
}

game();