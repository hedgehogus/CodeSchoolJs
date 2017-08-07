///////////////
// ITERATORS //
///////////////

// Arrays are iterable objects, which means we can use them with for..of

let names = ["sam", "tyler", "brook"];

for(let name of names){
    console.log(name);
}

// Plain JavaScript objects are not iterable, so they do not work with for..of out-of-the-box

// iterables return an iterator object. this object knows how to access items
// from a collection 1 at time, while keeping track of its current position within the sequence

//what really happening behind the scenes:
let iterator = names[Symbol.iterator]();

let firstRun = iterator.next();
let name = firstRun.value;

console.log(name);

let secondRun = iterator.next();
name = secondRun.value;

console.log(secondRun); // returns object {done:false, value: "tyler"}
console.log(name);      // while done is false the for..of loop will keep reading values from iterator

let thirdRun = iterator.next();
name = thirdRun.value;

console.log(thirdRun);
console.log(name);

let lastRun = iterator.next();
name = lastRun.value;

console.log(lastRun); // {done:true, value: undefined} -> breaks out of the loop when done is true
console.log(name);      // when done is true, value returns undefined


console.log("");

// An iterator is an object with a next property, 
// returned by the result of calling the symbol.iterator method

let post = {
    title: "New features in JS",
    replies: 19,
    information: "some descriptions"
}

// We can use Object.keys to build an array with property names for our object.
// we'll also use a counter(count) and boolean flag(isDone) to help 
// us navigate our collection

post[Symbol.iterator] = function () {
    
    let properties = Object.keys(this); // returns an array with property names
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

// implementation:
// objects that comply with the iterable protocol can also be used with the spread operator

for (let p of post){
    console.log(p);
}

let values = [...post]; // Groups property values and returns an array
console.log(values);
let [first, ...rest] = post;
console.log(first);
console.log(rest);

// lastly destructuring assignment will also work with iterables

let [title, replies] = post;
console.log(title);
console.log(replies);