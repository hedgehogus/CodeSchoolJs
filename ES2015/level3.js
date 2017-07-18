/////////////////////////
// OBJECTS AND STRINGS //
/////////////////////////

function buildUser(first, last){
    let fullName = first + " " + last;

    return {first: first, last: last, fullName: fullName};
}

let user = buildUser("sam", "williams");

console.log(user.first);
console.log(user.last);
console.log(user.fullName);

// removing repetitions from creating objects

function buildUser(first, last){
    let fullName = first + " " + last;

    return {first, last, fullName};
}

user = buildUser("sam", "williams");

console.log(user.first);
console.log(user.last);
console.log(user.fullName);

// the object initializer shorthand - works enywhere a new obj is returned, not just from functions

let name = "sam";
let age = 45;
let friends = ["brook", "hedgehog"];

user = {name, age, friends};

console.log(user);

//reading properties from object
// object destructuring

user = buildUser("hedgehog", "Hoglet");
// let {first, last, fullName} = buildUser("hedgehog", "Hoglet");
let {first, last} = user;
let {fullName} = user;

console.log(fullName);
console.log(first);
console.log(last);

function buildUser( first, last, postCount){
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;

    return { 
        first, 
        last,
        fullName,
        isActive: function(){
            return postCount >= ACTIVE_POST_COUNT;
        }};
}

// a new shorthand notstion is available for adding a method to an object where
// the keyword function is no longer necessary

function buildUser( first, last, postCount){
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;

    return { 
        first, 
        last,
        fullName,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }}
}

let newUser = buildUser( "hedgeh", "hoglet", 30);
let newUser2 =  buildUser( "hedgeh", "hoglet", 5);
var {isActive} = newUser2;
console.log(isActive());
var {isActive} = newUser;
console.log(isActive());


// template strings

function buildUser( first, last, postCount){
    //let fullName = first + " " + last;
    let fullName = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;
}


///////////////////
// OBJECT.ASSIGN //
///////////////////

// Object.assign copies properties from one or more sourse object to a target object specified as a very 
// first argument

// in case of duplicate properties on source objects, the value from the last object on the chain always prevails

function countdownTime(target, timeLeft, options = {}){

    let defaults = {
        container: ".timer-dispaly",
        timeUnit: "seconds",
        clonedDataAttribute: "cloned",
        timeoutClass: ".is-timeout",
        timeoutSoonClass: ".is-timeout_soon",
        timeoutSoonTime: 10
    };

}