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