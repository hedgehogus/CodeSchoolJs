///////////////
// USING LET //
///////////////

function loadProfiles(userName){
    if (userName.length > 3){
        let loadingMessage = "This might take a while...";
        _displaySpinner(loadingMessage);
    } else {
        let flashMessage = "loading Profiles";
        _displayFlash(flashMessage);
    }
}

// the let keyword defines new variables scoped to the nearest block, not function

////////////////////////////
// USING LET IN FOR LOOPS //
////////////////////////////

function loadProfiles(userName){
    //...

    for(let i in userName){
        execute(function(){
            console.log("fetched for" ,userName[i]);
        })
    }
}

function execute(action){
    action();
}

loadProfiles(["fir", "hedgehog", "hoglet"]);

// variables declared with let can be reassigned but cannot be redeclared within the same scope

let flashMessage = "hello";
flashMessage = "goodbye";

//redeclaring is not allowed
// let flashMessage = "goodbye";


///////////////
//USING CONST//
///////////////

function loadProfiles(userName){

    const MAX_USERS = 3;

   // MAX_USERS = 10; // probably runs syntax error, but outcome will vary depending on the JS engine

    if (userName.length > MAX_USERS){
        let loadingMessage = "This might take a while...";
        _displaySpinner(loadingMessage);
    } else {
        let flashMessage = "loading Profiles";
        _displayFlash(flashMessage);
    }

    const MAX_REPLIES = 3;

    if (someElement > MAX_REPLIES){
        //...
    }
}

// must be assingn initial value

// const MAX_USERS;
// MAX_USERS = 3; => this code will generate an error and will not work
