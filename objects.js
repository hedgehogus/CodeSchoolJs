// object creating

var booksArray = ["great expectations", "the remains of the day", "peter pan"];
var myBox = {height: 6, width: 8, length: 10, 
            volume:480,
            material:"cardboard",
            contents:booksArray
        };

//access  to the property

console.log(myBox.height);

// changing property values

myBox.width = 12;
myBox.contents.push("On the Road");

// adding property to the object

myBox.weight = 24;
myBox.destination = "Miami";

// we can use brackets on objects in similar fascion to accessing array indices

myBox["volume"];
myBox["material"];

// and create property

myBox["# of stops"] = 2;

// use to access property wich name with spases
console.log(myBox["# of stops"]);

// delete property from object
// always returns true

delete myBox.contents;

// objects in objects

myBox["# of Books"] = 0;

addBook(myBox, "The remains of the day", "kazuo ishiguro");
function addBook (box, name, writter){
    box["# of Books"] ++;
    box["book" + box["# of Books"]] = {title:name, author:writter};
}

console.log(myBox.book1.title);




var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];


function findVehicle (name, list){
  for (var i = 0; i < list.length; i++){
    if( list[i].type == name){
     return  list[i].storedAt;
    }
  }
}


console.log(findVehicle("Submarine", vehicles));


// object's functions

var aquarium ={
    Nemo: {type:"fish", species: "clownfish", length:3.7},
    Marlin: {type:"fish", species: "clownfish", length:4.1},
    Dory: {type:"fish", species: "blue tang", length:6.2},
    Peach: {type:"echinoderm", species: "starfish", length:5.3},
    "Coral Castle": {type: "environment", material: "coquina", moves: false},
    "Dragon Statue": {type: "environment", material: "plastic", moves: false},

    addCritter: function (name, type, species, length){
        this[name] = {type: type, species:species, length:length};
    }
}

aquarium.takeOut = function(name){
    this[name].name = name;
    var temp = this[name];
    delete this[name];
    return temp;
}

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);

console.log(aquarium);

var toy = aquarium.takeOut("Dragon Statue");

console.log(toy);