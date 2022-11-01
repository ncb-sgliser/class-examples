/**************************************
 * Define and initialize the variables 
 * that our program will use to act as 
 * a calculator.
 **************************************/
var acc = 0;
var currentOpperation = "";

/**************************************
 * Define the functions that our  
 * program will use to perform basic 
 * opperatoins.
 **************************************/
function add(n){
    acc = acc + n;
}

function sub(n){
    acc = acc - n;
}

function multiply(n){
    acc = acc * n;
}

function divide(n){
    acc = acc / n;
}

function getOpperation(){
    currentOpperation = this.getAttribute("data-opp");
    document.getElementById("currentOpp").textContent = currentOpperation;
}

function doTheMath(){
    //Pass the numInput's value into JavaScripts Number() function to turn 
    //it form a string to a number and assign it to a new variable for 
    //use in the upcoming calls to our math functions.
    var digit = Number(numInput.value);

    //if the opperation is "+"
    if(currentOpperation == "+"){
        //conduct the add function
        add(digit);
    }
    
    //if the opperation is "-"
    if(currentOpperation == "-"){
        //conduct the sub function
        sub(digit);
    }

    //if the opperation is "*"
    if(currentOpperation == "*"){
        //conduct the multiply function
        multiply(digit);
    }
        
    //if the opperation is "/"
    if(currentOpperation == "/"){
        //conduct the divide function
        divide(digit);
    }

    //update the UI with the new value of the ACC
    document.getElementById("acc").textContent = acc;

    //set the value of the current opperation back to "" 
    currentOpperation = "";

    //update the UI with the value of the current opperation.
    document.getElementById("currentOpp").textContent = currentOpperation;

    //set the value of the input field to ""
    numInput.value = "";
}

/**************************************
 * Here is the execution portion of our 
 * script. 
 **************************************/
console.log("Kicking off!");

//initialize the UI display of the accumulator
document.getElementById("acc").textContent = acc;

//establish hooks to all the UI buttons
var addButton = document.getElementById("add");
var subButton = document.getElementById("sub");
var mulButton = document.getElementById("multi");
var divButton = document.getElementById("div");
var eqButton = document.getElementById("equal");
var numInput = document.getElementById("num");

//assign the getOpperation function to click events
addButton.onclick = getOpperation;
subButton.onclick = getOpperation;
mulButton.onclick = getOpperation;
divButton.onclick = getOpperation;

//assign doTheMath functoin to the click event of the eqButton
eqButton.onclick = doTheMath;
