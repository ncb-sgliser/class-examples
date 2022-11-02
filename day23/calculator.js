const calculator = {
    acc:0,
    currentOpperation:"",
    addButton:null,
    subButton:null,
    mulButton:null,
    divButton:null,
    eqButton:null,
    numInput:null,
    accView:null,
    currentOppView:null
}

calculator.add = function(n){
    acc = acc + n;
}

calculator.subtract = function(n){
    acc = acc - n;
}

calculator.multiply = function(n){
    acc = acc * n;
}

calculator.divide = function(n){
    acc = acc / n;
}

calculator.updateView = function(){
    accView.textContent = this.acc;
    currentOppView.textContent = this.currentOpperation;
}

calculator.init = function(){
    this.addButton = document.getElementById("add");
    this.subButton = document.getElementById("sub");
    this.mulButton = document.getElementById("multi");
    this.divButton = document.getElementById("div");
    this.eqButton = document.getElementById("equal");
    this.numInput = document.getElementById("num");
    this.accView = document.getElementById("acc");
    this.currentOppView = document.getElementById("currentOpp");
    this.addButton.onclick = this.getOpperation;
}

calculator.getOpperation = function(e){
    currentOpperation = e.getTarget.getAttribute("data-opp");
    document.getElementById("currentOpp").textContent = currentOpperation;
}

calculator.doTheMath = function(){
    //Pass the numInput's value into JavaScripts Number() function to turn 
    //it form a string to a number and assign it to a new variable for 
    //use in the upcoming calls to our math functions.
    var digit = Number(this.numInput.value);

    //if the opperation is "+"
    if(this.currentOpperation == "+"){
        //conduct the add function
        add(digit);
    }
    
    //if the opperation is "-"
    if(this.currentOpperation == "-"){
        //conduct the sub function
        sub(digit);
    }

    //if the opperation is "*"
    if(this.currentOpperation == "*"){
        //conduct the multiply function
        multiply(digit);
    }
        
    //if the opperation is "/"
    if(this.currentOpperation == "/"){
        //conduct the divide function
        divide(digit);
    } 
  
    //set the value of the current opperation back to "" 
    currentOpperation = "";

    //set the value of the input field to ""
    numInput.value = "";

    this.updateView();
}


