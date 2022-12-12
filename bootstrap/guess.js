var guessButton = document.getElementById("submit");
var userInput = document.getElementById("guess");
var guesses = 6;

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

