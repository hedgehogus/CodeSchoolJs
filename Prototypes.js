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
