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