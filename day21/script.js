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

    //if the opperation is "+"
        //conduct the add function

    //if the opperation is "-"
        //conduct the sub function
        
    //if the opperation is "*"
        //conduct the multiply function
        
    //if the opperation is "/"
        //conduct the divide function

    //update the UI with the new value of the ACC

    //set the value of the current opperation back to "" 

    //update the UI with the value of the current opperation.

    //set the value of the input field to ""
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

