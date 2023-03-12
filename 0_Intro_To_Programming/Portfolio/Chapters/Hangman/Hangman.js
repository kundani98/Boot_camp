//........................Hangman Game.......................
//......................By Kundani Nemugumoni................


var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var noOfGuesses = word.length + 5;


while (remainingLetters > 0 && noOfGuesses > 0) {
   // Game code goes here
   // Show the player their progress
   showPlayerProgress(answerArray);
   // Take input from the player
   var guess = getGuess();
   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
   } else {
      var correctGuesses = updateGameState(guess, word, answerArray);
   }
}

showAnswerAndCongratulatePlayer(answerArray);


function pickWord() {
   //return a random word
   var words = [
      "javascript",
      "monkey",
      "amazing",
      "pancake",
      "kundani",
      "coding",
      "words"
   ];

   var word = words[Math.floor(Math.random() * words.length)];

   return word;

}

function setupAnswerArray(word) {
   //return the answer array
   let answerArray = [];
   for (var i = 0; i < word.length; i++) {

      answerArray[i] = "_";
   }
   return answerArray
}

function showPlayerProgress(answerarray) {
   //show the player their progress

   alert(answerarray.join(" "));

}

function getGuess() {

   return prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
}

function updateGameState(guess, word, answerarray) {

   //Update the game state with the guess
   for (var j = 0; j < word.length; j++) {

      if (word[j] === guess && answerArray[j] === "_") {
         answerArray[j] = guess;
         remainingLetters--;
      }
   }
   noOfGuesses--;
   // Update answerArray and remainingLetters for every correct guess

}

function showAnswerAndCongratulatePlayer() {
   if (remainingLetters === 0) {
      alert(answerArray.join(" "));
      alert("Goood job! The answer was " + word)
   }
   else {

      alert("Your number of guesses are finished:You lose try again");
   }


}
