const dice = document.getElementById("dice");
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;
}
