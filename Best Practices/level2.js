// LOOP OPTIMIZATION

var treasureChest = {goldCoins: 10000,
                    magicalItem: "Crown of speed",
                    necklaces: ["ruby", "pearl", "saphire", "diamond", "Hedgehog"],
                    openLid: function () { alert ("creeeeeak!");}
                };

console.log ("You've found the following necklaces:");

var list = treasureChest.necklaces;
for (var i = 0, x = treasureChest.necklaces.length; i < x ; i ++){
    console.log(list[i]);
}

Array.prototype.countType = function (type) {
    var count = 0;
    for (var i = 0, x = this.length; i < x; i++){
        if (this[i] === type){
            count++;
        }
    }
    return count;
}

// using a property approach to access indices also add in All methods that have been added to the array prototype 
for (p in list){
    console.log(p);
    console.log(list[p]);
}


var InvertedPeninsula = function() {
  this.inhabitants = [
    {
      name: 'Sir Charles',
      race: 'Human'
    },
    {
      name: 'Ealei',
      race: 'Elf'
    }
  ];
  // Adds an extra humans method property to the inhabitants array to return all Humans
  this.inhabitants.humans = function() { /* returns all Human inhabitants */ };
};

// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Log the name of each invertedPeninsula inhabitant
for (var i in invertedPeninsula.inhabitants) {
  console.log(invertedPeninsula.inhabitants[i]);
}
console.log(invertedPeninsula.inhabitants.humans.name);


// SCRIPT EXECUTION 

// async attribute allow the rest of the page to load before script runs

// <script type="text/javascript"
//          src = "http://...js"
//          async></script>


// SHORT PERFORMANCE TIPS

// let inheritance help with memory efficiency

SignalFire.prototype = {
    addLogs: function (numLogs){
        this.logsLeft += numLogs;
    },
    lightFire: function() { 
        alert("whoosh!");
    },
    smokeSignal: function (message){
        this.message = message
        if (this.logsLeft < this.message.length / 10){
            alert("not enough fuel for send the current message");
        } else {
            this.lightFire();
            var x = this.message.length;
            for (var i = 0; i < x; i++){
                alert("(((" + this.message[i] + ")))");
                if (i % 10 == 0 && i != 0){
                    this.logsLeft--;
                }
            }
        }
    }
}

function SignalFire(ID, startingLogs) {
    this.fireID = ID;
    this.logsLeft = startingLogs;
}

var fireOne = new SignalFire(1,20);
var fireTwo = new SignalFire(2.18);
var fireThree = new SignalFire(3,24);

fireOne.addLogs(8);
fireTwo.addLogs(10);
fireThree.addLogs(4);

// fireThree.smokeSignal("Goblins!");


// adding individual dom elements ain't always speedy

var list = document.getElementById("kotwList"),
    kotw = ["hedgehog", "hoglet", "hedgie"],
    fragment = document.createDocumentFragment(),
    element;
for (var i = 0, x = kotw.length; i < x ; i ++ ){
    element = document.createElement( "li");
    element.appendChild( document.createTextNode(kotw[i]));
    fragment.appendChild(element);
}
list.appendChild(fragment);

