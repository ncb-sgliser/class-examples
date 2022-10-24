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

function poorMansMultiply(x){
    var loopcount = 0;
    while(loopcount < x){
        add(acc);
        console.log("in the loop " + acc);
        loopcount++;
    }
}

console.log("Kicking off!");
add(1);
sub(2);
multiply(5);
add(25);
poorMansMultiply(5);

console.log(acc);
















/*
//add(1,2);

//pothagorean(2.0,3.0);


console.log("Made it to the end.");



function pothagorean(a, b){
    
    console.log( Math.pow((Math.pow(a,2) + Math.pow(b,2)), .5) )

    var csquared = (Math.pow(a,2) + Math.pow(b,2));
    console.log("c2 = " +csquared);

    var c = Math.pow(csquared, .5);
    console.log("c is "+c);
}


*/