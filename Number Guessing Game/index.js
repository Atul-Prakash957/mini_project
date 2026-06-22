let randomNumber = Math.floor(Math.random() * 3) + 1;
let attempts = 0;

function checkGuess() {
   // const userGuess = Number(document.getElementById("guessInput").value);
    let inputBox = document.getElementById("guessInput");
   let userGuess = inputBox.value;

   const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "❌ Please enter a number!";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        attemptsText.textContent = `Attempts: ${attempts}`;
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
    } 
    else {
        message.textContent = "📈 Too low! Try again.";
    }
}
