var guessButton = document.getElementById("submit");
var userInput = document.getElementById("guess");
var guessesMax = 6;
var guessesMade = 0;

let selectedWordIndex = Math.floor((Math.random() * 2315));
const selectedWord = words[selectedWordIndex];
console.log(selectedWord);

guessButton.onclick = function(){
    console.log(userInput.value);
    if(guessesMade <= guessesMax){
        var userGuess = userInput.value;
        //check if the guess is valid
        if(allowed.has(userGuess)){
            //check if they win
            if(userGuess == selectedWord){
                alert("You Win");
            }else{
                var guessChars = userInput.value.split("");
                var selectedWordChars = selectedWord.split("");
                var isGuessCharInWord = false;
                var isGuessCharInRightPosition = false;
                for(const x in guessChars){
                    console.log(guessChars[x]);
                    for(const y in selectedWordChars){
                        if(guessChars[x] == selectedWordChars[y]){
                            isGuessCharInWord = true;
                            if(x == y){
                                isGuessCharInRightPosition = true;
                            }
                        }
                    }
                    var uiLetter = document.querySelectorAll("#guess"+guessesMade+" > .letter")[x];
                    uiLetter.textContent = guessChars[x];
                }
                console.log("check the guess");
            }
        }else{
            alert("your guess sucks");
        }
    }
    guessesMade++;
    //ready for next guess
}

