/**

 */

let round = 1;
let playerScore = 0;
let computerScore = 0;
let playerMove = '';
let computerMove = '';
let playing = true;
const rock = document.getElementById("rock");  
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const controls = document.getElementById("controls");
const announcer = document.getElementById("announcer");
const playBtn = document.getElementById("play_button");
const arena = document.getElementById("arena");
playBtn.addEventListener("click", game);



scoreboard.update = function () {
  scoreboard.innerHTML = `First to five!<br>Round: ${round}<br>Player: 
                            ${playerScore}<br>Computer: ${computerScore}<br>`;
}

arena.draw = function (playerMove, cpuMove) {
  // If there is already a tableau drawn, delete it
  if (this.innerHTML.includes("img")) {
    const children = Array.from(this.childNodes);
    console.log("images already there")
    for (let child of children) {
      if (child.nodeName === "IMG")
        child.remove();
    }
  }
  const player = document.createElement('img')
  const cpu = document.createElement('img')
  console.log(this);
  console.log(player);
  console.log(cpu);
  player.src = `/media/${playerMove}.png`;
  player.style = "width: 80px; height: 80px;";
  cpu.src = `/media/${cpuMove}.png`;
  cpu.style = "width: 80px; height: 80px;";
  this.appendChild(player);
  this.appendChild(cpu);
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
  if (!playing) return;

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
  announcer.innerHTML += `<br>You threw ${playerMove} and the computer 
                            threw ${cpuMove}.`;

  arena.draw(playerMove, cpuMove);

  // check for a winner
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      announcer.textContent = "YOU WON THE GAME!!!";
      scoreboard.innerHTML += "YOU WON THE GAME!!! Press the button to play again.";
    } else {
      announcer.textContent = "YOU LOST!!! That's unfortunate.";
      scoreboard.innerHTML += "YOU LOST. But don't fear--press the button to start a new game!";
    }
    playing = false;
    return;
  }
}

function newGame() {
  playing = true;
  game();
}

function game() {
  playing = true;
  // will only affect first game
  scoreboard.classList.remove("hidden");

  announcer.textContent = "";
  round = 1;
  playerScore = 0;
  computerScore = 0;
  scoreboard.update();
  announcer.textContent = "Let's play ;)";
  this.textContent = "New Game";

  rock.addEventListener('click', playRound);
  paper.addEventListener('click', playRound);
  scissors.addEventListener('click', playRound);
}