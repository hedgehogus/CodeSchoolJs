// simple conditionals

var isArthur = false;
var weapon;

if (isArthur){
    weapon = "Excalibur";
} else {
    weapon = "Longsword";
}

//ternary

var weapon = isArthur ? "Excalibur" : "Longsword";

console.log("current weapon " + isArthur ? "Excalibur" : "Longsword"); // -> "Excalibur"
// any js value that is not 
//      - false, 
//      - 0, 
//      - undefined, 
//      - NaN,
//      -  "" or
//      - null 
//   will always evaluate as "truthy"

console.log("current weapon " + (isArthur ? "Excalibur" : "Longsword"));

isArthur = true;
var isKing = false;
console.log("current weapon " + (isArthur && isKing ? "Excalibur" : "Longsword"));




// logical assignment

//first true value
// or last false
var armory = {addSword: function (sword){
    this.swords = this.sword || [];
    this.swords.push(sword);
}};
// first false value
// or last true
var result1 = undefined && 42;

armory.retrieveSword = function (request){
    return (this.swords.indexOf(request) >= 0) ? 
    this.swords.splice(this.sword.indexOf(request),1)[0]:
    alert("NO " + request+ ", baby!");
}

var armoryIsOpen = true;
var isKnight = true;
var weapon = armory && isKnight && armory.retrieveSword("Katana"); // extended logical assignment


// the switch block

function Knight (name, regiment){
    this.name = name;
    this.regiment = regiment;

    switch(regiment){
        case 1: 
        this.weapon = "broadsword";
        break;
        case 3:
        this.weapon = "Claymore";
        break;
        case 4:
        this.weapon = "Longsword";
        break;
        case 5:
        case 6:
        case 2:
        this.weapon = "mace"
        default:
        alert(name + " is incorrect");
    }
}

function ceremonialDagger (knight, rank){
    this.length = 8;
    this.owner  = knight;
    switch (rank){
        case "King": this.diamonds = 1;
        case "Hight Constable": this.amethyst = 2;
        case "Field Marshal": this.saphires = 4;
        case "Captain": this.emeralds = 1;
        case "Knight": this.rubies = 6;
    }
}

