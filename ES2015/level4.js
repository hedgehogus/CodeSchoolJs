//////////////////////////
// ARRAYS. NEW FEATURES //
//////////////////////////

// 1. Array destructuring

let users = ["sam", "tyler", "brook"];
let [a, b, c] = users;
console.log(a, b, c);

users = ["aaa", "bbb", "ccc", "ddd", "eee"];
[a, b, c] = users;
console.log(a, b, c);
[a, b,, c] = users;
console.log(a, b, c);
[a,,,b] = users;
console.log(a,b);

// we can combine destructuring with rest parameters to group values into other arrays
let[first, second, ...rest ] = users;
console.log(first, second);
console.log(rest);
console.log("");

// when returning arrays from functions, we can assign to multiple variables at once

function activeUsers(){
    let users = ["sam", "tyler", "alex"];
    return users;
}

let active = activeUsers();
console.log(active);

[a,b,c] = activeUsers();
console.log(a,b,c);

[a,b,c] = active;
console.log(a,b,c);

console.log("");


// 2. FOR ...OF loop 

let names = ["sam", "tyler", "brook"];

for (let index in names){
    console.log(names[index]);
}

for (let name of names){
    console.log(name);
}

// the for ...of statement cannot be used to iterate over properties in plain JS objects out-of-the box

let post = {
    title: "New Features in JS",
    replies: 19,
    lastReplyFrom: "sam"
};

//for (let property of post){      => typeError: post[Symbol.iterator] is not a function
//    console.log("Value: ", property);
//}

// in order to work with for of, objects need a special function assigned to the Symbol.iterator property
// the presence of this property allows us to know whether an object is iterable

let str = "string";

console.log( typeof names[Symbol.iterator]);
console.log( typeof post[Symbol.iterator]);
console.log( typeof str[Symbol.iterator]);

for ( let one of str){
    console.log(one);
}


// 3. Array.find

users = [
    {login: "sam", admin:false },
    {login: "brook", admin:true },
    {login: "tyler", admin:true },
];

let admin = users.find ( (user) => { // testing function
    return user.admin;
});
console.log(admin);

admin = users.find( user => user.admin);
console.log(admin);

// Which of the following options will return the first topic
// object that is not locked? Check all that apply. 


let recentTopics = [
  { 
    title: "Semi-colons: Good or Bad?",
    isLocked: true 
  },
  { 
    title: "New JavaScript Framework Released", 
    isLocked: true 
  },
  { 
    title: "ES2015 - The Shape of JavaScript to Come", 
    isLocked: false 
  }
];

recentTopics.find( topic => !topic.isLocked );
recentTopics.find( (topic) => !topic.isLocked );


//////////
// MAPS //
//////////

// Maps are data structure composed of a collection of key/value pairs. 
// they are very useful to store simple data, such as property values

// ISSUES

// When using Objects as maps, its keys are always converted to string

let user1 = { name: "sam"};
let user2 = { name: "tyler"};

let totalReplies = {};
totalReplies[user1] = 5;
totalReplies[user2] = 42;

console.log (totalReplies[user1]);
console.log (totalReplies[user1]);

console.log(totalReplies);
console.log ( Object.keys(totalReplies));

// the map object is a simple key/value data structure
// any value may be used as either a key or a value, and objs are not converted to string

totalReplies = new Map();
totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

console.log(totalReplies.get(user1));
console.log(totalReplies.get(user2));


// use maps when keys are unknown until runtime

let recentPosts = new Map();

/** createPost( newPost, (data) => {
        recentPosts.set(data.author, data.message);
    }
); **/

// somwhere elsein th code

/** socket.on("new post", function(data){
    recentPosts.set(data.outhor, data.message);
}); **/


//---------------------------
// maps are iterable, so they can be used in for of loop. Each run of the loop 
// returns a [key,value] pair for an entry in the map.

let mapSettings = new Map();
mapSettings.set("user", "sam");
mapSettings.set("topic", "es2015");
mapSettings.set("replies", ["cant wait", "so cool"]);

for (let [key, value] of mapSettings){
    console.log(`${key} = ${value}`);
}

console.log("map obj");
console.log(mapSettings);

// WEAK MAP

// the WeakMap is a type of map where only objects can be passed as keys.
// primitive data types - such as strings, numbers, booleans, etc. - are not allowed

let user = {};
let comment = {};

mapSettings = new WeakMap();
mapSettings.set(user, "user");
mapSettings.set(comment, "comment");

console.log(mapSettings.get(user));
console.log(mapSettings.get(comment));

// mapSettings.set("title", "es2015"); => invalid value used as weak map key

// all available methods on a weakMap require acces to an object used as a key

console.log(mapSettings.get(user)); // returns an entry
console.log(mapSettings.has(user)); // checks for the presence of a key - true or false
console.log(mapSettings.delete(user)); // removes an entry and returns a boolean based on wheter that entry existed
console.log(mapSettings.delete(name));

// WeakMaps are not iterable, therefore they cant be used with for of

// weak maps are better with memory
// individual entries in weakMap can be garbage collected while the weakmap itself still exists




//////////
// SETS //
//////////

// the set object stores unique values of any type, whether primitive values or object references

let tags = new Set();

tags.add("java script");
tags.add("programing");
tags.add({version: "2015"}); // both primitive values and objects are allowed
tags.add("web");
tags.add("web"); // duplicate entries are allowed

console.log("total items", tags.size);
console.log(tags);
console.log(tags.has("web"));
console.log(tags.has("web1"));
tags.delete("web");

// set objects are iterable, which means they can be used with for of and destructuring

for ( let item of tags){
    console.log(item);
}

let [a1,a2,a3,a4] = tags;
console.log(a1,a2,a3,a4);

// weakSet is a type of set where only objects are allowed to be stored

let weakTags = new WeakSet();

// weakTags.add("JavaScript"); -> type error
weakTags.add({name: "java Script"});
let iOS = {name:"iOS"};
weakTags.add(iOS);

weakTags.has(iOS);
weakTags.delete(iOS);

// WeakSets cannot be used with for of and they offer no methods for reading values from it


let readPosts = new WeakSet();

// when post is clecked on
postList.addEventListener('click', (event) =>{
    //...
    readPosts.add(post);
});

// ... rendering posts
for(let post of postArray){
    if(!readPosts.has(post)){
        _addNewPostClass(post.element);
    }
}



