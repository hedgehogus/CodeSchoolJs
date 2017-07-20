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