///////////////
// ITERATORS //
///////////////

// Arrays are iterable objects, which means we can use them with for..of

let names = ["sam", "tyler", "brook"];

for(let name of names){
    console.log(name);
}

// Plain JavaScript objects are not iterable, so they do not work with for..of out-of-the-box

