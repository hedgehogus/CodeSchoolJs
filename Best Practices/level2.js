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