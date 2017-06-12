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

var armory = {addSword: function (sword){
    this.swords = this.sword || [];
    this.swords.push(sword);
}};