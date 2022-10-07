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
const resetBtn = document.createElement("button");
resetBtn.textContent = "New Game";
resetBtn.addEventListener("click", newGame);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const controls = document.getElementById("controls");
const announcer = document.getElementById("announcer");
const playBtn = document.getElementById("play_button");
playBtn.addEventListener("click", game);



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

function playRound() {
  console.log("Entered eventHandler1111()");
  console.log(this);
  const cpuMove = getComputerChoice();
  const playerMove = (this.childNodes[0].data).toLowerCase();
  if (cpuMove === playerMove) {
    console.log("TIE!");
    announcer.textContent = "TIE!";
    round++;
    scoreboard.update();
  }
  else if (cpuMove === "rock" && playerMove === "scissors"
        || cpuMove === "scissors" && playerMove === "paper"
        || cpuMove === "paper" && playerMove === "rock") {
          console.log("LOSE");
          announcer.textContent = "LOSE :(";
          round++;
          computerScore++;
          scoreboard.update();
  } else if (cpuMove === "rock" && playerMove === "paper"
          || cpuMove === "scissors" && playerMove === "rock"
          || cpuMove === "paper" && playerMove === "scissors") {
            announcer.textContent = "WIN :D";
            round++;
            playerScore++;
            scoreboard.update();
  }
}

function newGame() {
  this.remove();
  scoreboard.classList.add("hidden");
  // reset scoreboard
  round = 1;
  playerScore = 0;
  computerScore = 0;
}

function game() {
  // Initialize scoreboard
  scoreboard.classList.remove("hidden");
  scoreboard.update();
  announcer.textContent = "Let's play ;)";

  // Initialize controls
  if (Array.from(controls.childNodes).find(e => e.nodeName === resetBtn.nodeName)) {
    controls.appendChild(resetBtn);
  }

  rock.addEventListener("click", playRound);
  paper.addEventListener("click", playRound);
  scissors.addEventListener("click", playRound);
}