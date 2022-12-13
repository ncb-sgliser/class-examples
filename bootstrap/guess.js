var guessButton = document.getElementById("submit");
var userInput = document.getElementById("guess");
var guesses = 6;

let selectedWordIndex = Math.floor((Math.random() * 2315));
const selectedWord = words[selectedWordIndex];
console.log(selectedWord);

guessButton.onclick = function(){
    console.log(userInput.value);
    if(guesses > 0){
        var guessChars = userInput.value.split("");
        for(const x in guessChars){
            console.log(guessChars[x]);
        }
        console.log("check the guess");
    }
    guesses = guesses - 1;
}

