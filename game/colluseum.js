colluseum = {
    "floor":"sand",
    "shape":"circle",
    "fighters": [],
    "firstPlayersTurn":true
}

colluseum.load = function(){
    this.fighters[0] = fighter.new("Warrior", 10, 3, 6);
    this.fighters[1] = fighter.new("Monk", 3, 9, 1);
}



colluseum.go = function(){
    let fighter1 = this.fighters[0];
    let fighter2 = this.fighters[1];
    while(fighter1.hp > 0 && fighter2.hp > 0){
        if(this.firstPlayersTurn){
            fighter1.hp = fighter1.hp - 2;
        }else{
            fighter2.hp = fighter2.hp - 2;
        }
        this.firstPlayersTurn = !this.firstPlayersTurn;
        console.log("1:"+fighter1.hp+"  2:"+fighter2.hp);
    }
    alert("game over");
}

/*
colluseum.go = function(){
    let fighter1 = this.fighters[0];
    let fighter2 = this.fighters[1];
    while(fighter1.hp > 0 && fighter2.hp > 0){
        if(this.firstPlayersTurn){
            fighter1.strike(fighter2);
            if(fighter2.hp <= 0){
                document.getElementById("fighter2").classList.add("dead");
                document.getElementById("fighter1").classList.add("victory");
            }
        }else{
            fighter2.strike(fighter1);
            if(fighter1.hp <= 0){
                document.getElementById("fighter1").classList.add("dead");
                document.getElementById("fighter2").classList.add("victory");
            }
        }
        console.log("Fighter 1: "+fighter1.hp+ "   Fighter2: "+fighter2.hp);
        this.firstPlayersTurn = !this.firstPlayersTurn;
    }
}
*/