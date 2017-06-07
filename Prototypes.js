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
 - toPrecision()

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
beachShoe.putOn();

