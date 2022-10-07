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

let round = 1;
let playerScore = 0;
let computerScore = 0;
let playerMove = '';
let computerMove = '';
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const controls = document.getElementById("controls");

scoreboard.update = function () {
  scoreboard.childNodes[0].textContent = `Round: ${round}`;
  scoreboard.childNodes[1].textContent = `Player: ${playerScore}`;
  scoreboard.childNodes[2].textContent = `Computer: ${computerScore}`;
}

/**
 * getCompuetChoice() : generate a random valid move for use by computer player
 * @returns a valid move
 */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*3)];
}

// Return the score from perspective of player A's move
// There must be a better way to code this logic --- TODO
function scoreA(A, B) {
  console.log("Entered scoreA()");
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
  console.log("HI");

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

function playRound(A, B) {
  console.log("Entered eventHandler()");

  return "incorrect input";
}

function newGame() {
  console.log("hi");
  this.remove();
  scoreboard.classList.add("hidden");
  // reset scoreboard
  round = 1;
  playerScore = 0;
  computerScore = 0;
}

function game() {
  // Initialize scoreboard
  console.log(scissors);
  scoreboard.classList.remove('hidden');
  scoreboard.update();

  // Initialize controls
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "New Game";
  resetBtn.addEventListener('click', newGame);
  controls.appendChild(resetBtn);

  rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    scoreboard.update();
  });
  paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    scoreboard.update();
  });
  scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    scoreboard.update();
  });
}

const playBtn = document.getElementById("play_button");
playBtn.addEventListener('click', game);

//game();