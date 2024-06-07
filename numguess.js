const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

document.getElementById("guessSubmit").onclick = function () {
  const guess = parseInt(document.getElementById("guessField").value);
  const lowOrHi = document.getElementById("lowOrHi");

  if (isNaN(guess) || guess < min || guess > max) {
    lowOrHi.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;
    if (guess < answer) {
      lowOrHi.textContent = "Your guess is too low!";
    } else if (guess > answer) {
      lowOrHi.textContent = "Your guess is too  high!";
    } else {
      lowOrHi.textContent = `CORRECT! You took ${attempts} attempts to get there!`;
      document.getElementById("guessSubmit").disabled = true; // Disable the button after correct guess
    }
  }
};
