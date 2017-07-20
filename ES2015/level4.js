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
let[first, second, ...rest ];
console.log(first, second);
console.log(rest);