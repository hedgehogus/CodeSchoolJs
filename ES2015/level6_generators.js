////////////////
// GENERATORS //
////////////////

// the function *declaration defines generator functions.
// these are special functions from which we can use the YIELD
// keyword to return interators objects.

function *nameList(){ // it's a star character
    yield "Sam";    // {done:false, value:"Sam"}
    yield "Tyler";  // {done:false, value:"Tyler"}
}

// it doesnt matter where we put a star character, as long as 
// it's the first thing after the function keyword

// function *nameList(){ 
// function* nameList(){ 
// function * nameList(){ 

// Generators functions return objects that provide the same next method expected byy
// for.. of, the spread operator and the destructuring assignment

console.log(nameList());

for (let name of nameList()){
    console.log(name);
}

let names = [...nameList()];
console.log(names);

let [first,second] = nameList();
console.log( first, second);

// Knowing how to mannually craft an iterator objects is , but there's a shorter syntax

let post = {
    title: "New features in JS",
    replies: 19,
    information: "some descriptions"
}

post[Symbol.iterator] = function () {
    
    let properties = Object.keys(this); 
    let count = 0; // allows us to access the properties array by index
    let isDone = false; // will be set to true when we are done with the loop

    let next = () =>{
        if(count >= properties.length){
            isDone = true; // ends the loop after reaching the last property
        }
        return {done:isDone, value: this[properties[count++]] };

    }

    return {next};
};

// we can make this shorter
// each time yield is called, our function return a new iterator object 
// and then pauses until it's called again

post[Symbol.iterator] = function *() { // <-generator function signature
    
    let properties = Object.keys(this); 
    
    for (let p of properties){
        yield this[p];
    }

};

for (let p of post){
    console.log(p);
}