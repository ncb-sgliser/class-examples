var fighter = {
    "name":null,
    "hp":0,
    "armor":0,
    "attack":0
}

fighter.new = function(name, hp, armor, attack){
    return Object.assign({}, fighter, {name, hp, armor, attack});
}