var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessLeft = 10;
// guessesSoFar is to hold userGuesses each round
var guessSoFar = [];
// userGuess is what the user picks by pressing each key
var userGuess = null;

//Let the computer select a random letter from alphabets
var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];

//store each letter that user press
console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guess Left + " Guesses so far: " + guessSoFar + " Computer picked: " + computerGuess);

//if userGuess match computerGuess, wins add up, if not, loss add up
document.onkeypress = function() {
	if (userGuess === computerGuess) {
		wins++;
		guessLeft --;
		else (
			losses++;
			)
	}
}

//

//reset the game

if (guessLeft == 0) {
	losses++;
	console.log("You lost!");
	guessesLeft = 9;
	guessesSoFar = [];
	letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
}