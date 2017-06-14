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