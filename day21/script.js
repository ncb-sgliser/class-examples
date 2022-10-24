var acc = 0;

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

function getOpperation(el){
    currentOpperation = el.getAttribute("data-opp");
}

function poorMansMultiply(x){
    var loopcount = 0;
    while(loopcount < x){
        add(acc);
        console.log("in the loop " + acc);
        loopcount++;
    }

    for(loopcount = 0; loopcount < x; loopcount++){
        add(acc);
        console.log("in for the loop " + acc);
    }
}

console.log("Kicking off!");
document.getElementById("acc").textContent = acc;

var addButton = document.getElementById("add");
var subButton = document.getElementById("sub");
var mulButton = document.getElementById("multi");
var divButton = document.getElementById("div");
var eqButton = document.getElementById("equal");
var numInput = document.getElementById("num");

addButton.onclick = function(){
    console.log(this.getAttribute("data-opp"));
}

var currentOpperation = "";
