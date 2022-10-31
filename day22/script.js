var testNumber = 5;

//if
if(testNumber == 0){
    console.log("Test Number is Zero");
}

if(testNumber != 0){
    console.log("Test Number is NOT equal to Zero");
}

//if - else if - else - &&
if(testNumber > 0){
    console.log("Test Number is Greater than Zero");
}else if(testNumber > 0 && testNumber <5){
    console.log("Test Number is between Zero and Five");
}else if(testNumber >=5 && testNumber <= 10){
    console.log("Test Number is between Five and Ten");
}else{
    console.log("Test Number is is not on a scale of 0-10");
}

//switch
switch(testNumber){
    case 0:
        console.log("Switch test is Zero");
        break;
    case 1:
        console.log("Switch test is 1");
        break;
    default:
        console.log("Switch test is not 0 or 1");
        break;
}

//while looping 
var x = 0;
while(x < testNumber){
    console.log("while looping "+ (testNumber - x) + " time more");
    x++;
}

//for looping
for(y = 0; y < testNumber; y++){
    console.log("for looping "+ (testNumber - y) + " time more");
}