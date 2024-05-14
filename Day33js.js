function guessNumber() {

    var userGuess = parseInt(prompt("Please,Enter a number between 0 and 9:"));
    var randomNumber = Math.floor(Math.random() * 10);

    
    if (!isNaN(userGuess) && userGuess >= 0 && userGuess <= 9) {
        if (userGuess === randomNumber) {
            alert("Congratulations! You guessed the correct number.");
        } else {
            alert("Sorry, try again! The correct number was " + randomNumber + ".");
        }
    } else {
        alert("Please enter a valid number between 0 and 9.");
    }
}

guessNumber();
