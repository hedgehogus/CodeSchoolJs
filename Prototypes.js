/* 

Properties of all Objects:

 - valueOf
 - constructor
 - toLocaleString
 - isPrototypeOf
 - propertyIsEnumerable
 - hasOwnProperty

 Properties of Array:

 - length
 - pop()
 - push()
 - shift()
 - reverse()
 - sort()
 - join()
 - reduce()
 - slice()

 String properties:

 - length
 - charAt()
 - trim()
 - concat()
 - indexOf()
 - replace()
 - toUpperCase()
 - toLowerCase()
 - subString()

 Number:

 - toFixed();
 - toExponential();
 - toPrecision();

 Function:

 - name
 - bind()
 - call()
 - apply()
*/
 

var myString = "hedgehog hedgehog HOGLET";
console.log(myString.hasOwnProperty("charAt"));

var obj = {prop:2};
console.log(obj.hasOwnProperty("prop"));

String.prototype.countAll = function (letter) {
    var letterCount = 0;
    for (var i = 0; i < this.length; i++){
        if( this.charAt(i).toUpperCase() == letter.toUpperCase()){
            letterCount++;
        }
    }
    return letterCount;
}

console.log (myString.countAll("h"));




Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// using inheritance, we can create new Objects with our Objects as prototypes

var shoe = { size: 6, gender: "women", construction: "slipper"};

var magicShoe = Object.create(shoe);

shoe.heels = "true";

magicShoe.color = "red";

console.log(shoe);
console.log(magicShoe);

Object.prototype.isPrototypeOf(shoe);//true
shoe.isPrototypeOf(magicShoe); // true
magicShoe.isPrototypeOf(shoe); // false
Object.isPrototypeOf(magicShoe); // true

function Shoe (shoeSize,shoeColor, forGender, constructStyle){
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
}

Shoe.prototype = {
    putOn: function() {alert("shoess on " + this.construction)},
    takeOff: function() {alert(" what is that smell?")}
}

var beachShoe = new Shoe (10,"blue", "women", "flipflop");

console.log(beachShoe);
//beachShoe.putOn();

// Properties inherited from the Object.prototype

var x = 4;
var y = "4";

x.valueOf(); // -> 4
y.valueOf(); // -> "4"

x.valueOf() == y.valueOf(); // -> true

x.valueOf() === y.valueOf(); // -> false

console.log(x==y);
console.log(x===y);
console.log(x.valueOf() == y.valueOf());
console.log(x.valueOf() === y.valueOf());

var Tornado = function (category,affectedAreas, windGust){
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
}

var cities = [["kansas city", 464310],["topeka", 127939], ["lenexa", 49398]];
var twister = new Tornado("F5", cities, 220);

console.log(twister.valueOf());

Tornado.prototype.valueOf = function() {
    var sum = 0;
    for (var i = 0; i < this.affectedAreas.length; i++){
        sum += this.affectedAreas[i][1];
    }
    return sum;
}

console.log(twister.valueOf());

cities.push(["olathe", 130045]);
console.log(twister.valueOf());

console.log(x.toString() === y);
console.log(cities.toString());

Tornado.prototype.toString = function() {
    var list = "";
    for (var i = 0; i < this.affectedAreas.length; i++){
        if (i < this.affectedAreas.length -1) {
            list = list + this.affectedAreas[i][0] + ", ";
        } else {
            list = list + "and " + this.affectedAreas[i][0];
        }
    }

    return "This tornado has been classified as an " + this.category + ", with wind gust up to " + this.windGust +
    "mph. Affected areas are: " + list + ", potentially affecting a population of " + this.valueOf() + ".";
}

console.log(twister.toString());

console.log(twister.constructor);
console.log(twister.constructor.prototype);
console.log(twister.__proto__);

Object.prototype.findOwnerOfProperty = function(propName) {
    var currentObject = this;
    while (currentObject !== null) {
        if (currentObject.hasOwnProperty(propName)){
            return currentObject;
        } else {
            currentObject = currentObject.__proto__;
        }
    }
    return "No property found";
};

twister.prop = "prop";

console.log(".......");
console.log(twister.findOwnerOfProperty("prop"));
console.log(twister.findOwnerOfProperty("category"));
console.log(twister.findOwnerOfProperty("hasOwnProperty"));
console.log(twister.findOwnerOfProperty("ffff"));