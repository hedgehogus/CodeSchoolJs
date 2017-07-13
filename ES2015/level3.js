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