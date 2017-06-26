// CAREFUL COMPARISONS

console.log("4" == 4); // true
console.log("4" === 4); // false

console.log( true == 1); // true
console.log( true == 2); // false
console.log( true === 1); // false

console.log( false == 0); // true
console.log( false == undefined); // false
console.log( false === 0); // false
console.log( false === undefined); // false

console.log("\n   \n  \t" == 0); // true

function countEntries (knightResponses, value){
    var count = 0, x = knightResponses.length;
    for (var i = 0; i < x ; i++){
        if (knightResponses[i] === value){
            count ++;
        }
    }
    return count;
}

console.log(countEntries(["fir", "1", "12", true, true, false], true));

function LeatherArmor (bodyStyle, numBuckles, numSpaulders){
    this.bodyStyle = bodyStyle;
    this.numBuckles = numBuckles;
    this.numSpaulders = numSpaulders;
}
LeatherArmor.prototype = Object.create(Armor.prototype);

function ChainMail (metal, linkDiameter, hasHood, skirtLength){
    this.metal = metal;
    this.linkDiameter = linkDiameter;
    this.hasHood - hasHood;
    this.skirtLength = skirtLength;
}
ChainMail.prototype = Object.create(Armor.prototype);

function Armor (location){
    this.location = location;
}

Armor.prototype = {
    putOn: function() { alert("your armor is on.");}
}

var armorList = [/*..the armorys mixed up list of all available armor objects...*/];
var newbs = [/*... a list of Knights objects...*/];

function assignKnightsArmor( knights, armorAvail){
    var x = knights.length;
    var y = armorAvail.length;
    for (var i = 0; i , x; i++){
        for (var j = 0; j < y; j++){
            if (armorAvail[j] instanceof ChainMail){
                knights[i].armor = armorAvail.splice(j,1)[0];
                y --;
                break;
            }
        }
    }
}

assignKnightsArmor (newbs, armorList);