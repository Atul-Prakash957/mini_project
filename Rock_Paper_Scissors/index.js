const playerDisplay = document.getElementById('player');
const computerDisplay = document.getElementById('computer');
const resultDisplay = document.getElementById('result');

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  const computerChoice =
    choices[Math.floor(Math.random() * choices.length)];

  let display = "";

  if (playerChoice === computerChoice) {
    display = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        display = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        display = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        display = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = display;
}
