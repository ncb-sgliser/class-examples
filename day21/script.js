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

