var fighter = {
    "name":null,
    "hp":0,
    "armor":0,
    "attack":0
}

fighter.new = function(name, hp, armor, attack){
    return Object.assign({}, fighter, {name, hp, armor, attack});
}

/*
fighter.defend = function(incoming){
    let damage = incoming - this.armor;
    if(damage > 0){
        this.hp = this.hp - damage;
    }
    if(this.armor > 0){
        this.armor = this.armor - 1;
    }
    console.log("damage:"+damage + " hp:"+this.hp + " armor:"+this.armor);

}

fighter.strike = function(opponent){
    console.log("attack for "+this.attack);
    opponent = opponent.defend(this.attack);

}
*/