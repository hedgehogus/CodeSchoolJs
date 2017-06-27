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

// EXCEPTION HANDLING

try {
    alert(alarm); // reference error
} catch (error){
    console.log(" oh no \n" + error);
}

// error types allow us to take more informed action
list = ["yyy"];

try {
    var newHallOfFame = ["dask frosting", " render tallborn"];
    if (list === undefined){
        throw new ReferenceError();
    }
    if ((list instanceof Array) === false){
        throw new TypeError();
    }
    list = list.concat(newHallOfFame);
} catch (error){
    if (error instanceof ReferenceError){
        alert(error + "\n" + " the HoF roster does not exist as \"list\"!\n" 
        + "check for relocation in master document");
    }
    if (error instanceof TypeError){
        alert( error + "\n" + "list exists, but is no longer an Array . \n" +
        "check for disastrous overwrite");
    }
} finally { // will execute whether try mes with succes or failure. 
    //Now we'll know exactly what list contsined at the end of operatio, if anything
    console.log(list);
}

//nested catch blocks

function changeInnerHTMLByIdOrExisting(id, update, existing){
    try{
        var newElement = undefined;
        document.getElementById(id).innerHTML = update;
    } catch (error){
        try {
            var elements = document.getElementsByTagName('*');
            for (var i = 0, x = elements.length; i<x; i++){
                if(elements[i].innerHTML === existing){
                    elements[i].innerHTML = update;
                    id = elements[i].id;
                    break;
                }
                if (i === x){
                    throw new Error("custom error message");
                }
            }
        }catch(error2){
            alert( error2.message + " \n Creating new text node.");
            newElement = document.createTextNode(update);

        }
    } finally {
        if (newElement !== undefined){
            console.log("returning new text node");
            return newElement;
        } else {
            console.log (" modified element " + (id||existing));
        }
    }
}

// WHAT NOT TO DO

// JavaScripts "with" keyword is somewhat unreliable and often expensive, 
// so it generally avoided in practice


var castle ={
    soldiers:865,
    keep: {
        soldiers:19,
        drawbridge : {
            soldiers: 8,
            capacity: 20,
            open: function(){
                alert("rrrrrrrBang");
            }
    }
    }
}