const colluseum = {
    "floor":"sand",
    "shape":"circle",
    "fighters": []
}

colluseum.load = function(){
    this.fighters[0] = fighter.new("Warrior", 10, 3, 6);
    this.fighters[1] = fighter.new("Monk", 3, 9, 1);
}