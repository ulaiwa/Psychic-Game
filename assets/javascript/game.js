var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessLeft = 10;
// guessesSoFar is to hold userGuesses each round
var guessSoFar = [];
// userGuess is what the user picks by pressing each key
var userGuess = null;

//computer randomize letter from alphabets
var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];

//update guess once user press a key
var updateGuessLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
};

var updatecomputerGuess = function() {
  this.computerGuess = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
};
var updateGuessSoFar = function() {
	document.querySelector('#guessSoFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Function will be called when reset
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updatecomputerGuess();
  updateGuessLeft();
  updateGuessSoFar();
}

updatecomputerGuess();
updateGuessLeft();

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessLeft();
  updateGuessSoFar();

    if (guessLeft > 0){
        if (userGuess == computerGuess){
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("woah you are psychic!");
            reset();
        }
    }else if(guessLeft == 0){
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("try again?");
        reset();
    }
};